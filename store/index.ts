import {
  changeQuantity,
  replaceObject,
  updateCartAndProducts,
} from '~/utils/vuex'
import generateFakeData, { BaseProduct } from '../mock/data'

export type Product = BaseProduct & { quantity?: number }

type ActionArgs = {
  commit: any
  state: RootState
}

export enum infoView {
  iddle = 'iddle',
  product = 'product',
  cart = 'cart',
}

type Store = {
  products: Product[]
  cart: Product[]
  selectedProductId: string | null
}

const initialState: Store = {
  products: [],
  cart: [],
  selectedProductId: null,
}

export const state = (): Store => initialState
export type RootState = ReturnType<typeof state>

export const mutations = {
  setProducts(store: RootState, newProducts: Product[]) {
    store.products = newProducts
  },
  addProduct(store: RootState, sentProduct: Product) {
    const newProduct = { ...sentProduct, quantity: 1 }
    store.cart = [...store.cart, newProduct]
    store.products = store.products.map((product) =>
      replaceObject<Product>(product, newProduct, 'id')
    )
  },
  removeProduct(store: RootState, sentProduct: Product) {
    store.products = store.products.map((product) => {
      const { quantity, ...defaultProductInfo } = product
      return replaceObject<Product>(product, defaultProductInfo, 'id')
    })
    store.cart = store.cart.filter((product) => product.id !== sentProduct.id)
  },
  increaseProductQuantity(store: RootState, sentProduct: Product) {
    updateCartAndProducts(store, changeQuantity(sentProduct, true))
  },
  decreaseProductQuantity(store: RootState, sentProduct: Product) {
    updateCartAndProducts(store, changeQuantity(sentProduct, false))
  },
  showProductInfo(state: RootState, productInfo: Product) {
    state.selectedProductId = productInfo.id
  },
}

export const actions = {
  async nuxtServerInit({ state }: { state: RootState }) {
    const fakeProducts = await generateFakeData()
    state.products = fakeProducts
  },
  decreaseQuantityOrDelete({ commit }: ActionArgs, product: Product) {
    if (product.quantity === 1) {
      commit('removeProduct', product)
    } else {
      commit('decreaseProductQuantity', product)
    }
  },
}

export const getters = {
  currentSideInfo(state: RootState) {
    if (state.selectedProductId) {
      return infoView.product
    }

    if (state.cart.length) {
      return infoView.cart
    }

    return infoView.iddle
  },
  activeProduct(state: RootState) {
    return state.products.find(
      (product) => product.id === state.selectedProductId
    )
  },
}
