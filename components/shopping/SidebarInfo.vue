<template>
  <div class="sticky top-20">
    <div v-if="sidebarTitle">
      <h2 class="font-medium text-secondary py-4 text-xl">
        {{ sidebarTitle }}
      </h2>
    </div>
    <div>
      <ProductDescription
        v-if="$store.getters.currentSideInfo === sidebarStatus.product"
      />
      <Cart v-if="$store.getters.currentSideInfo === sidebarStatus.cart" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { infoView } from '~/store'
import ProductDescription from './ProductDescription.vue'
import Cart from './Cart.vue'

export default Vue.extend({
  data() {
    return {
      sidebarStatus: infoView,
    }
  },
  computed: {
    sidebarTitle() {
      switch (this.$store.getters.currentSideInfo) {
        case infoView.product:
          return 'Producto'
        case infoView.cart:
          return 'Carrito'
        default:
          return null
      }
    },
  },
  components: { ProductDescription, Cart },
})
</script>
