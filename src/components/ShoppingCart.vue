<template>
  <div class="shopping-cart">
    <h1>Your Cart</h1>
    <ul>
      <li v-for="product in products">{{product.title}} - {{product.price | currency}} --> {{product.quantity}}</li>
    </ul>
    <h2>Cart total : </h2>
    <p>{{ total | currency}}</p>
    <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button>
    <p class="status" v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',

  computed: {
    products() {
      return this.$store.getters.cartProducts
    },
    total() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style lang="css">
</style>
