import Vue, { PropOptions } from 'vue'
import { Product } from '~/store'

export const productDataPropMixin = Vue.extend({
  props: {
    productData: {
      type: Object,
      required: true,
    } as PropOptions<Product>,
  },
})
