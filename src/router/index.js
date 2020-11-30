import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/Main.vue';
import Code from '@/views/Code.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/code',
      component: Code,
    },
  ],
});
