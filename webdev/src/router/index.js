import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Welcome from '../views/Welcome.vue'
import Welcome from '../views/HomePage.vue'
import IssuesPage from '../views/IssuesPage.vue'
import ProjectPage from '../views/ProjectPage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "home",
    component: Home
  },
  {
    path:'/',
    name:'welcome',
    component:Welcome
  },
  {
    path:'/issues',
    name:'issues',
    component:IssuesPage
  },
  {
    path:'/projects',
    name:'projects',
    component:ProjectPage
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});



export default router;
