import productsData from "../mock/data"

export const state = () => ({
  products: productsData,
})

export type RootState = ReturnType<typeof state>