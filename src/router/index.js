import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/index.vue'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }

  ]
})
