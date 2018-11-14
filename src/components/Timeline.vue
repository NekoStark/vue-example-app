<template>
  <div>
    <AddNewPost :handleAddNew="onNewPost" />
    <div class="box">
      <div v-for="(post, index) in posts" :key="post.id">
        <Post :authorId="post.userId" :content="post.body" />
        <hr v-if="index < posts.length - 1"/>
      </div>
    </div>
    <a
      class="button is-rounded is-fullwidth"
      :class="{ 'is-loading': loading }"
      v-if="next"
      @click="loadMore"
    >
      Load more
    </a>
  </div>
</template>

<script>
import axios from 'axios';
import parse from 'parse-link-header';
import Post from '@/components/Post.vue';
import AddNewPost from '@/components/AddNewPost.vue';

// FIXME update post fatto per bene
export default {
  name: 'timeline',
  components: {
    Post,
    AddNewPost,
  },
  data() {
    return {
      loading: false,
      posts: [],
      next: null,
    };
  },
  methods: {
    async loadMore() {
      if (this.loading) {
        return;
      }
      this.loading = true;

      const link = this.next.url;
      const result = await axios.get(link);

      this.posts = this.posts.concat(result.data);
      const linkHeader = parse(result.headers.link);
      this.next = linkHeader ? linkHeader.next : null;

      this.loading = false;
    },
    onNewPost(post) {
      this.posts = [post, ...this.posts];
    },
  },
  async mounted() {
    this.next = { url: 'https://jsonplaceholder.typicode.com/posts?_sort=title&_page=1&_limit=20' };
    this.loadMore();
  },
};
</script>
