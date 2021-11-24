import { rest } from "msw"

export type ProductData = {
  id: number,
  name: string,
  description: string,
  price: number
}

export default [
  rest.get("/products", (req, res, ctx) => {
    return res(
      ctx.json({
        products: [

        ]
      })
    )
  })
]