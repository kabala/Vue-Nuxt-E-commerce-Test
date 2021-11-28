const axios = require('axios')
const faker = require('faker')
const fs = require('fs')

function generateFakeData() {
  const products = []
  const generatorCb = (resolve) => {
    const productName = faker.commerce.productName()
    axios
      .get(
        `https://source.unsplash.com/random/640x480/?${productName
          .split(' ')
          .slice(-2)
          .join(',')}`
      )
      .then(({ res }) => {
        resolve({
          id: faker.datatype.uuid(),
          name: productName,
          description: faker.commerce.productDescription(),
          picture: res.responseUrl,
          price: parseFloat(faker.commerce.price()),
          ranking: Math.floor(Math.random() * 5 + 1),
        })
      })
  }
  for (let i = 0; i < 10; i++) {
    const generatorPromise = new Promise(generatorCb)
    products.push(generatorPromise)
  }

  return products
}

const generateFakeProducts = generateFakeData()

Promise.all(generateFakeProducts)
  .then((data) => {
    console.log({ data })
    fs.writeFileSync('fakeData.json', JSON.stringify(data))
  })
  .catch((e) => console.log(e))
