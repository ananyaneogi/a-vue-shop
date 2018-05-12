import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList
    }
  ]
})
