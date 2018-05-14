<template>
  <div class="product-page">
    <div class="sidebar-wrap">
      <Sidebar/>
    </div>
    <div class="product-list-wrap">
      <h1>Furniture</h1>
      <ProductList category="decor"/>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'index',
  components: {
    ProductList,
    Sidebar
  }
}
</script>

<style lang="css">
 h1 {
  text-align: left;
  margin-bottom: 40px;
  font-size: 20px;
 }
</style>
