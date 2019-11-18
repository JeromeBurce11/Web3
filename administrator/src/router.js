import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/NavForm2.vue'
import HomePage from './views/HomePage.vue'

import store from "./store"
Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated == true) {
          next("/homepage");
        } else {
          next();
        }

      },

    },

    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated == false) {
          next("/login");
        } else {
          next();
        }
      },
    },
  
    {
      path: '/edit',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Edit.vue')
    },
 
  ]
})
export default router;
