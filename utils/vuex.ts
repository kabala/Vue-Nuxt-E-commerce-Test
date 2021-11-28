import { Product, RootState } from '~/store'

export function replaceObject(
  previous: Product,
  recent: Product,
  conditionalProperty: string = 'id'
): Product {
  return previous[conditionalProperty] !== recent[conditionalProperty]
    ? previous
    : recent
}

export function replaceEqualObject(
  previous: Product,
  recent: Product,
  conditionalProperty: string = 'id'
): Product {
  return previous[conditionalProperty] === recent[conditionalProperty]
    ? recent
    : previous
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
    return replaceObject(product, updatedProduct, 'id')
  })
  store.products = store.products.map((product) => {
    return replaceObject(product, updatedProduct, 'id')
  })
}
