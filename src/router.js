import Vue from 'vue'
import Router from 'vue-router'
import Employee from './views/Employee.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employee',
      component: () => import(/* webpackChunkName: "about" */ './views/Employee.vue')
    }
  ]
})
