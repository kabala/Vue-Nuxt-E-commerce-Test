import { Product, RootState } from '~/store'

export function replaceObject<T>(
  previous: T,
  recent: T,
  conditionalProperty: string
): T {
  return previous[conditionalProperty] !== recent[conditionalProperty]
    ? previous
    : recent
}

export function changeQuantity(
  product: Product,
  increaseOrDecrease: boolean
): Product {
  return {
    ...product,
    ...(product.quantity && {
      quantity: increaseOrDecrease
        ? product.quantity + 1
        : product.quantity - 1,
    }),
  }
}

export function updateCartAndProducts(
  store: RootState,
  updatedProduct: Product
) {
  store.cart = store.cart.map((product) => {
    return replaceObject<Product>(product, updatedProduct, 'id')
  })
  store.products = store.products.map((product) => {
    return replaceObject<Product>(product, updatedProduct, 'id')
  })
}
