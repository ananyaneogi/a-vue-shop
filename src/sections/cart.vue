<template>
  <transition name="fade" tag="div">
  <div class="shopping-cart-wrap">
    <h1>Shopping Cart</h1>
    <ShoppingCart/>
  </div>
</transition>
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
