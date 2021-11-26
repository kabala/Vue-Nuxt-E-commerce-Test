import faker from 'faker'

export type BaseProduct = {
  id: string
  name: string
  description: string
  picture: string
  price: number
  ranking: number
}

const productsData: BaseProduct[] = Array.from({ length: 20 }, () => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  picture: faker.image.technics(),
  price: parseFloat(faker.commerce.price()),
  ranking: Math.floor(Math.random() * 5 + 1),
}))

export default productsData
