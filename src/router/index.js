import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Explore from '../views/Explore.vue';
import Reader from '../views/Reader.vue';
import Overview from '../views/Overview.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/read',
    name: 'Reader',
    component: Reader
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/series',
    name: 'Serie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Serie.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
