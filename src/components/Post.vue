<template>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64" v-if="loading === false">
        <img class="is-rounded" v-bind:src="`https://api.adorable.io/avatars/64/${author.email}`" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{author.name}}</strong> · <small>{{author.username}}</small>
          <br>
          {{content}}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios';

export default {
  name: 'post',
  props: {
    authorId: Number,
    content: String,
  },
  data() {
    return {
      loading: true,
      author: {},
    };
  },
  async mounted() {
    const author = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.authorId}`);
    this.author = author.data;
    this.loading = false;
  },
};
</script>
