<template>
  <div class="shopping-cart">
    <div v-if="$store.state.cart.length <= 0" class="empty-cart">
      <p>Your cart is currently empty.</p>
      <router-link to="/">
        <button>Shop Now!</button>
      </router-link>
    </div>
    <div v-else class="shopping-cart-items">
      <ul>
        <li v-for="product in products" class="cart-product-card">
          <img :src="`./static/images/${product.img}`" :alt="`Image of ${product.title}`">
          <span class="product-title">{{product.title}}</span>
          <span class="product-price"> {{product.price | currency}}</span>
          <span class="product-cart-quantity">Quantity: {{product.quantity}}</span>
        </li>
      </ul>
      <div class="cart-checkout">
        <h3>Cart total : </h3>
        <p>{{ total | currency}}</p>
        <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button>
        <p class="status" v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p> -->
        <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button> -->
        <button @click="checkout">Checkout</button>
        <p class="status" v-if="checkoutStatus">{{checkoutStatus}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'ShoppingCart',

  computed: {
    ...mapGetters({
      products:'cartProducts',
      total:'cartTotal'
    }),
    ...mapState({
      checkoutStatus: 'checkoutStatus'
    })
  },
  methods: {
    ...mapActions({
      checkout: 'checkout'
    })
  }

  // computed: {
  //   products() {
  //     return this.$store.getters.cartProducts
  //   },
  //   total() {
  //     return this.$store.getters.cartTotal
  //   }
  // }
}
</script>

<style lang="css" scoped>
.empty-cart {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-45%);
}

.empty-cart p {
  margin-bottom: 30px;
}

.shopping-cart-items {
  display: flex;
  flex-direction: row;
}

ul {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  flex: 2;
  padding-left: 0;
  justify-content: center;
}

.cart-checkout {
  flex: 1;
  justify-content: center;
}

.cart-checkout p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
}

.cart-product-card {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  margin-bottom: 40px;
}
.product-price {
  margin-bottom: 5px;
}

img {
  width: 180px;
  height: 240px;
}

@media(max-width: 600px) {
  .shopping-cart-items {
    flex-direction: column;
  }

  .cart-product-card {
    margin-right: 0px;
  }
  ul {
    justify-content: space-around;
  }

  img {
    width: auto;
  }
}
</style>
