<template>
  <div class="box">
    <form @submit.prevent="submit">
      <div class="field">
        <textarea class="textarea" placeholder="Add a new post" rows="3" v-model="body"></textarea>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button type="submit" class="button is-primary">Send</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      body: '',
    };
  },
  props: {
    handleAddNew: Function,
  },
  methods: {
    async submit() {
      const newPost = { userId: this.$root.user.id, title: '', body: this.body };
      await axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(newPost));

      this.handleAddNew(newPost);
      this.body = '';
    },
  },
};
</script>
