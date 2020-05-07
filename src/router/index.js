import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
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
    path: '/groupmanager',
    name: 'GroupManager',
    component: () => import(/* webpackChunkName: "about" */ '../views/GroupManager.vue')
  },
  {
    path: '/showgroup',
    name: 'showgroup',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowGroup.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logout.vue')
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

    path : '*',
    redirect : '/login'
  },
  {

    path: '/questionform',
    name: 'QuestionForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/QuestionForm.vue')
  },

  {
    path: '/messenger',
    name: 'Messenger',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Messenger.vue')
  }, 
  {
    path: '/veranstaltungsauswahl',
    name: 'VeranstaltungsAuswahl',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VeranstaltungsAuswahl.vue')
  },
  {
    path: '/postyourquestion',
    name: 'PostYourQuestion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PostYourQuestion.vue')
  },
  
  
]

const router = new VueRouter({
  routes
})

export default router
