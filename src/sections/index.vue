<template>
  <section class="all-products">
    <h1>Products</h1>
    <ProductList category="all"/>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'index',
  components: {
    ProductList,
    SideMainLayout
  }
}
</script>

<style lang="css">
</style>
