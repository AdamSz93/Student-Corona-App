import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/showhelpers',
    name: 'ShowHelpers',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowHelpers.vue')
  },
  {
    path: '/questionmanager',
    name: 'QuestionManager',
    component: () => import(/* webpackChunkName: "about" */ '../views/QuestionManager.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/questionform',
    name: 'QuestionForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/QuestionForm.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
