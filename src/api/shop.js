/**
 * Mocking client-server processing
 */
// const _products = [
//   {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
//   {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
//   {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
// ]
const _products = [
  {
    id: 1,
    title: 'Faux Strelitzia Leaf Pair',
    price: 100.00,
    category: 'decor',
    sale: false,
    img: 'planter1.jpg',
    inventory: 2
  },
  {
    id: 2,
    title: 'Rohini Daybed',
    price: 1119.99,
    category: 'furniture',
    sale: false,
    img: 'daybed1.jpg',
    inventory: 20
  },
  {
    id: 3,
    title: 'Marte Basket Table',
    price: 179.99,
    category: 'furniture',
    sale: true,
    img: 'basket-table.jpg',
    inventory: 20
  },
  {
    id: 4,
    title: 'Modular Velvet Sofa',
    price: 549.00,
    category: 'furniture',
    sale: true,
    img: 'sofa1.jpg',
    inventory: 20
  },
  {
    id: 5,
    title: 'Vinyl Record Storage Set',
    price: 29.99,
    category: 'furniture',
    sale: false,
    img: 'rack.jpg',
    inventory: 5
  },
  {
    id: 6,
    title: '10" Marble Planter',
    price: 58.99,
    category: 'decor',
    sale: true,
    img: 'planter2.jpg',
    inventory: 20
  },
  {
    id: 7,
    title: 'Desert Moonflower Credenza',
    price: 998.00,
    category: 'men',
    sale: false,
    img: 'credenza.jpg',
    inventory: 20
  },
  {
    id: 8,
    title: 'Leni Leaning Mirror',
    price: 139.90,
    category: 'decor',
    sale: false,
    img: 'mirror1.jpg',
    inventory: 0
  },
  {
    id: 9,
    title: 'Claudio Dining Set',
    price: 899.00,
    category: 'furniture',
    sale: true,
    img: 'dining.jpg',
    inventory: 20
  },
  {
    id: 10,
    title: 'Symbology Banner',
    price: 129.99,
    category: 'decor',
    sale: false,
    img: 'bunting.jpg',
    inventory: 20
  },
  {
    id: 11,
    title: 'Reema Sofa Set',
    price: 80.99,
    category: 'furniture',
    sale: false,
    img: 'sofa2.jpg',
    inventory: 20
  },
  {
    id: 12,
    title: 'Blush Velvet Daybed',
    price: 1179.89,
    category: 'furniture',
    sale: true,
    img: 'daybed2.jpg',
    inventory: 20
  },
  {
    id: 13,
    title: 'Polka Dot Wicker Basket',
    price: 69.00,
    category: 'decor',
    sale: false,
    img: 'wicker.jpg',
    inventory: 20
  },
  {
    id: 14,
    title: 'Stripe Rag Rug',
    price: 29.99,
    category: 'decor',
    sale: true,
    img: 'rag.jpg',
    inventory: 20
  },
  {
    id: 15,
    title: 'Rosalie Velvet Bed',
    price: 1820.90,
    category: 'furniture',
    sale: false,
    img: 'bed.jpg',
    inventory: 20
  },
  {
    id: 16,
    title: 'Wire Loop Vanity',
    price: 159.00,
    category: 'furniture',
    sale: true,
    img: 'vanity.jpg',
    inventory: 20
  }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
