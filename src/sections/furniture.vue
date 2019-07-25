<template>
  <section class="furniture">
    <h1>Furniture</h1>
    <ProductList category="furniture"/>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'

export default {
  name: 'index',
  components: {
    ProductList,
    SideMainLayout
  }
}
</script>

<style>
</style>
