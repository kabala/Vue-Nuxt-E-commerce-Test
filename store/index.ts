import productsData, { BaseProduct } from '../mock/data'

type Product = BaseProduct & { quantity?: number }

type Store = {
  products: Product[] | null
  cart: Product[] | null
}

type ActionArgs = {
  commit: any
  state: RootState
}

type ChangeProductQuantityArgs = {
  productId: string
  newQuantity: number
}

const initialState: Store = {
  products: null,
  cart: null,
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
    console.log('hi')

    if (!state.products) {
      commit('setProducts', productsData)
    }
  },
  decreaseQuantityOrDelete({ commit, state }: ActionArgs) {},
}
