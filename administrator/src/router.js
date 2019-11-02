import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Register from './views/NavForm.vue'
import Login from './views/NavForm2.vue'
import HomePage from './views/HomePage.vue'
import Issues from './views/Issues.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/issues',
      name: 'issues',
      component: Issues
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/edit',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Edit.vue')
    }
  ]
})
