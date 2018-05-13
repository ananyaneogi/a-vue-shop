import shop from '@/api/shop'

export default { // setting and updating the state
  setProducts(state,products) {
    state.products = products
  },

  pushProductToCart(state,productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
    state.cartItems++
  },
  incrementItemQty(state,cartItem) {
    cartItem.quantity++
    state.cartItems++
  },
  decrementProductInventory(state,product) {
    product.inventory--
  },
  setCheckoutStatus(state,status) {
    state.checkoutStatus = status
  },
  emptyCart(state) {
    state.cart = []
    state.cartItems = 0
  }
}
