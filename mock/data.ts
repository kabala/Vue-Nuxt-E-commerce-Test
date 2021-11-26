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

function generateFakeData(): Promise<BaseProduct>[] {
  const products: Promise<BaseProduct>[] = []
  const generatorCb = (resolve: any) => {
    const productName: string = faker.commerce.productName()
    axios
      .get(
        `https://source.unsplash.com/random/640x480/?${productName
          .split(' ')
          .at(-1)}`
      )
      .then(({ request }) => {
        resolve({
          id: faker.datatype.uuid(),
          name: productName,
          description: faker.commerce.productDescription(),
          picture: request.res.responseUrl,
          price: parseFloat(faker.commerce.price()),
          ranking: Math.floor(Math.random() * 5 + 1),
        })
      })
  }
  for (let i = 0; i < 10; i++) {
    const generatorPromise: Promise<BaseProduct> = new Promise(generatorCb)
    products.push(generatorPromise)
  }

  return products
}

export default generateFakeData
