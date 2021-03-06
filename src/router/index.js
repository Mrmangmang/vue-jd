import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../views/Register";
import Login from "../views/Login";
import index from '../views/index'
// import Login from "../views/Login";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'register',
    component: Login
  },
    {
      path:'/register',
      name:'register',
      component: Register
    },
    {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
    {
      path:'/index',
      name: 'index',
      component: index
    },
    {
      path:'/botnav',
      name: 'botnav',
      component:()=>import('../views/Botnav')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
