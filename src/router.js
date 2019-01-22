import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employee',
      component: () => import(/* webpackChunkName: "about" */ './views/Employee.vue')
    },
    {
      path: '/sharedSpace',
      name: 'sharedSpace',
      component: () => import ('./views/sharedSpace.vue')
    },
    {
      path: '/Members',
      name: 'Members',
      component: () => import ('./views/Members.vue')
    }
  ]
})
