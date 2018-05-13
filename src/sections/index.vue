<template>
  <div class="product-page">
    <div class="sidebar-wrap">
      <Sidebar :pricerange.sync="highprice"/>
    </div>
    <div class="product-list-wrap">
      <h1>Products</h1>
      <ProductList/>
      <!-- <router-link to="/cart" exact>Go to Cart</router-link> -->
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
  },
  data() {
    return {
      highprice: 300
    };
  },
}
</script>

<style lang="css">
 h1 {
  text-align: left;
  margin-bottom: 40px;
  font-size: 20px;
 }
</style>
