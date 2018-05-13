<template>
  <div class="shopping-cart-wrap">
    <h1>Shopping Cart</h1>
    <ShoppingCart/>
  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'

export default {
  name: 'cart',
  components: {
    ShoppingCart
  }
}
</script>

<style lang="css">
</style>
