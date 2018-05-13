<template>
  <div class="shopping-cart">
    <div v-if="$store.state.cart.length <= 0" class="empty-cart">
      <p>Your cart is currently empty.</p>
      <router-link to="/">
        <button>Shop Now!</button>
      </router-link>
    </div>
    <div v-else>
      <ul>
        <li v-for="product in products">{{product.title}} - {{product.price | currency}} --> {{product.quantity}}</li>
      </ul>
      <h2>Cart total : </h2>
      <p>{{ total | currency}}</p>
      <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button>
      <p class="status" v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p> -->
      <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button> -->
      <button @click="checkout">Checkout</button>
      <p class="status" v-if="checkoutStatus">{{checkoutStatus}}</p>
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

<style lang="css">
.empty-cart {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-45%);
}

.empty-cart p {
  margin-bottom: 30px;
}
</style>
