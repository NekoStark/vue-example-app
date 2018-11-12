import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import NotFound from './views/NotFound.vue';
import NotAllowed from './views/NotAllowed.vue';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { open: true },
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: NotAllowed,
    },
    {
      path: '*',
      name: 'not_found',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (!to.meta.open && !router.app.user) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
    return;
  }
  if (to.path.startsWith('/login') && router.app.user !== undefined && router.app.user !== null) {
    next({ path: '/forbidden' });
    return;
  }
  next();
});

Vue.use(Router);

export default router;
