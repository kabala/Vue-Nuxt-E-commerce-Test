import faker from "faker"

export type ProductData = {
  id: string,
  name: string,
  description: string,
  picture: string,
  price: number
}

const productsData: ProductData[] = Array.from({length: 20}, () => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  picture: faker.image.technics(),
  price: parseFloat(faker.commerce.price())
}))

export default productsData