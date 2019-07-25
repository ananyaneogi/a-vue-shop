<template>
  <div class="product-page">
    <div class="sidebar-wrap">
      <Sidebar/>
    </div>
    <div class="product-list-wrap">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import ProductList from '@/components/ProductList'

export default {
  components: {
    Sidebar,
    ProductList
  }
}
</script>

<style>
</style>
