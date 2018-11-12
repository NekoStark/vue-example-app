<template>
  <div class="box">
    <div v-for="(post, index) in posts" :key="post.id">
      <Post v-bind:authorId="post.userId" v-bind:content="post.body" />
      <hr v-if="index < posts.length - 1"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Post from '@/components/Post.vue';

export default {
  name: 'timeline',
  components: {
    Post,
  },
  data() {
    return {
      loading: true,
      posts: [],
      page: 1,
    };
  },
  async mounted() {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?_sort=title&page=${this.page}&_limit=20`);
    this.posts = result.data;
  },
};
</script>
