import productsData, { BaseProduct } from '../mock/data'

export type Product = BaseProduct & { quantity?: number }

type Store = {
  products: Product[]
  cart: Product[]
}

type ActionArgs = {
  commit: any
  state: RootState
}

type ChangeProductQuantityArgs = {
  productId: string
  newQuantity: number
}

enum infoView {
  iddle = 'iddle',
  product = 'product',
  cart = 'cart',
}

type InfoviewStatus = {
  status: infoView
  info?: Product[] | Product
}

const initialState: Store = {
  products: [],
  cart: [],
}

export const state = (): Store => initialState
export type RootState = ReturnType<typeof state>

export const mutations = {
  setProducts(state: RootState, products: Product[]) {
    state.products = products
  },
  addProduct(state: RootState, product: Product) {},
  removeProduct(state: RootState, productId: string) {},
  changeProductQuantity(
    state: RootState,
    { productId, newQuantity }: ChangeProductQuantityArgs
  ) {},
}

export const actions = {
  getInitialProducts({ commit, state }: ActionArgs) {
    console.log('exists ', state.products.length)

    if (!state.products.length) {
      commit('setProducts', productsData)
    }
  },
  decreaseQuantityOrDelete({ commit, state }: ActionArgs) {},
}
