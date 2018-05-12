import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state : { // = data
    products:[],
    cart:[],
    checkoutStatus: null
  },

  getters : { // = computed properties
    availableProducts(state,getters) {
      return state.products.filter(product => product.inventory > 0)
    },
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal(state,getters) {
      // let total = 0;
      // getters.cartProducts.forEach(product => {
      //   total = total + product.price * product.quantity
      // })
      // return total;

      return getters.cartProducts.reduce((total,product) => total + product.price * product.quantity, 0)
    },

    productInStock() {
      return(product) => {
        return product.inventory > 0
      }
    }
  },

  actions : { // = mehtods
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
  },

  mutations : { // setting and updating the state
    setProducts(state,products) {
      state.products = products
    },

    pushProductToCart(state,productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    incrementItemQty(state,cartItem) {
      cartItem.quantity++
    },
    decrementProductInventory(state,product) {
      product.inventory--
    },
    setCheckoutStatus(state,status) {
      state.checkoutStatus = status
    },
    emptyCart(state) {
      state.cart = []
    }
  }
})
