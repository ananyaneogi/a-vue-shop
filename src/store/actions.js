import shop from '@/api/shop'

export default { // actions = mehtods
  fetchProducts(context) {
    return new Promise(function(resolve, reject) {
      shop.getProducts(products => {
        context.commit('setProducts',products)
        resolve();
      })
    })
  },

  addProductToCart(context, product) {
    // if(product.inventory > 0)
    if(context.getters.productInStock(product)){
      const cartItem  = context.state.cart.find(item => item.id === product.id)
      if(!cartItem) {
        context.commit('pushProductToCart',product.id)
      }
      else {
        context.commit('incrementItemQty',cartItem)
      }

      context.commit('decrementProductInventory',product)

    }
  },

  checkout(context) {
    shop.buyProducts(
      context.state.cart,
      () => {
        context.commit('emptyCart')
        context.commit('setCheckoutStatus','success')
      },
      () => {
        context.commit('setCheckoutStatus','fail')
      }
    )
  }
}
