<template>
  <div class="shopping-cart">
    <h1>Your Cart</h1>
    <ul>
      <li v-for="product in products">{{product.title}} - {{product.price | currency}} --> {{product.quantity}}</li>
    </ul>
    <h2>Cart total : </h2>
    <p>{{ total | currency}}</p>
    <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button>
    <p class="status" v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p> -->
    <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button> -->
    <button :disabled="$store.state.cart.length <= 0" @click="checkout">Checkout</button>
    <p class="status" v-if="checkoutStatus">{{checkoutStatus}}</p>
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

<style lang="css">
</style>
