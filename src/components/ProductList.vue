<template>
  <div class="product-page">
    <h1>Products</h1>
    <p v-if="loading">Loading....</p>
    <ul v-else>
      <li v-for="product in products">
        {{product.title}} - {{product.price | currency}} --> {{product.inventory}}
        <button :disabled="!productInStock(product)" @click="addProduct(product)">Add to cart</button>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'ProductList',
  data() {
    return {
      // products: []
      loading: false
    };
  },
  computed: {
    products() {
      return this.$store.state.products
      // return this.$store.getters.availableProducts
    },
    productInStock() {
      return this.$store.getters.productInStock
    }
  },
  created() {
    // shop.getProducts(products => {
    //   // this.products = products;
    //   store.commit('setProducts',products)
    // });
    this.loading = true
      this.$store.dispatch('fetchProducts')
      .then(() => this.loading = false)
  },
  methods : {
    addProduct(product) {
      this.$store.dispatch('addProductToCart',product)
    }
  }
}
</script>

<style lang="css">
</style>
