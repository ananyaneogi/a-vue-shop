<template>
  <div class="product-list">
    <p v-if="loading">Loading....</p>
    <ul v-else>
        <li v-for="product in products" class="product-card" :class="[ !productInStock(product) ? 'out-of-stock' : '' ]" tabindex="0" v-show="category === product.category || category === 'all'">
          <span class="sale-banner" v-if="product.sale">Sale</span>
          <span class="out-of-stock-banner" v-show="!productInStock(product)">Out of Stock</span>
          <img :src="`./static/images/${product.img}`" :alt="`Image of ${product.title}`">
          <span class="product-title">{{product.title}}</span>
          <span class="product-price"> {{product.price | currency}}</span>
          <button @click="addProductToCart(product)" class="add-to-cart-btn">Add to cart</button>
        </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'ProductList',
  data() {
    return {
      // products: []
      loading: false,
      highprice: 100
    };
  },
  props: {
    category: {
      type: String,
      default: false
    },
  },
  computed : {
    // ...mapState({
    //   products: state => state.products
    // }),
    products() {
      return this.$store.state.products.filter(el =>
        this.$store.state.sale
          ? el.price < this.$store.state.highprice && el.sale
          : el.price < this.$store.state.highprice
      )
    },
    ...mapGetters({
      productInStock: 'productInStock'
    })
  },
  // computed: {
  //   products() {
  //     return this.$store.state.products
  //     // return this.$store.getters.availableProducts
  //   },
  //   productInStock() {
  //     return this.$store.getters.productInStock
  //   }
  // },
  created() {
    // shop.getProducts(products => {
    //   // this.products = products;
    //   store.commit('setProducts',products)
    // });
    this.loading = true
    // this.$store.dispatch('fetchProducts')
    this.fetchProducts()
      .then(() => this.loading = false)
  },
  methods : {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart'

    }),

    // addProductToCart(product) {
    //   this.$store.dispatch('addProductToCart',product)
    // }
  }
}
</script>

<style lang="css">
.sale-banner {
  background: rgb(232, 35, 25);
  color: white;
  font-family: sans-serif;
  position: absolute;
  padding: 2px 10px 4px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
}
.out-of-stock-banner {
  background: #505050;
  color: #f9f9f9;
  font-family: sans-serif;
  position: absolute;
  padding: 2px 10px 4px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  z-index: 99;
}

 .add-to-cart-btn {
   opacity: 0;
 }

 @media (max-width: 600px) {
   .add-to-cart-btn {
     opacity: 1;
   }
 }

 .product-card:hover, .product-card:focus  {
   box-shadow: 1px 0rem 14px 0px #eee;
   outline: none;
 }

 .product-card:hover .add-to-cart-btn{
   opacity: 1;
 }

/* For keyboard controls */
 .product-card:focus .add-to-cart-btn {
   opacity: 1;
 }

 .add-to-cart-btn:focus {
   opacity: 1;
 }

 .product-title {
   margin-top: 10px;
   margin-bottom: 5px;
 }
 .product-price {
   font-weight: bold;
 }

 .product-card.out-of-stock {
   pointer-events: none;
 }
 .product-card.out-of-stock button {
   display: none;
 }

 .product-card.out-of-stock img {
   opacity: 0.6;
 }
 .product-card.out-of-stock .product-price,  .product-card.out-of-stock .product-title{
   opacity: 0.6;
 }

</style>
