import Vue from 'vue'
import Router from 'vue-router'
import index from '@/sections/index'
import cart from '@/sections/cart'
import furniture from '@/sections/furniture'
import decor from '@/sections/decor'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/furniture',
      name: 'furniture',
      component: furniture
    },
    {
      path: '/decor',
      name: 'decor',
      component: decor
    }
  ]
})
