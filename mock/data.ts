import axios from 'axios'
import faker from 'faker'

export type BaseProduct = {
  id: string
  name: string
  description: string
  picture: string
  price: number
  ranking: number
}

async function generateFakeData(): Promise<BaseProduct[]> {
  const products: BaseProduct[] = []
  for (let i = 0; i < 10; i++) {
    const productName: string = faker.commerce.productName()
    const { request } = await axios.get(
      `https://source.unsplash.com/random/640x480/?${productName
        .split(' ')
        .at(-1)}`
    )

    products.push({
      id: faker.datatype.uuid(),
      name: productName,
      description: faker.commerce.productDescription(),
      picture: request.res.responseUrl,
      price: parseFloat(faker.commerce.price()),
      ranking: Math.floor(Math.random() * 5 + 1),
    })
  }

  return products
}

/*
const productsData: BaseProduct[] = Array.from({ length: 20 }, () => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  picture: faker.random.image(),
  price: parseFloat(faker.commerce.price()),
  ranking: Math.floor(Math.random() * 5 + 1),
}))
*/

export default generateFakeData
