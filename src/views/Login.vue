<template>
  <section class="hero is-fullheight has-background-white-ter">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <div class="notification is-danger" v-if="error">{{error}}</div>
            <form @submit.prevent="doLogin">
              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="email"
                    placeholder="Your Email"
                    autofocus=""
                    autocomplete="true"
                    v-model="email"
                  >
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    class="input"
                    type="password"
                    placeholder="Your Password"
                    v-model="password"
                  >
                </div>
              </div>
              <button class="button is-block is-info is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async doLogin() {
      const { email, password } = this;

      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}&username=${password}`);
      if (data.length === 0) {
        this.error = 'email/password not valid';
        return;
      }

      const loggedUser = data[0];
      this.$root.user = loggedUser;
      router.push({ path: '/' });
    },
  },
};
</script>
