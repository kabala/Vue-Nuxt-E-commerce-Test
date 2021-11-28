<template>
  <div class="sticky top-24">
    <div class="flex items-center h-14" v-if="sidebarTitle">
      <h2 class="font-medium text-secondary text-xl">
        {{ sidebarTitle }}
      </h2>
    </div>
    <div>
      <IdleMessage
        v-if="$store.getters.currentSideInfo === sidebarStatus.iddle"
        message="Selecciona un producto"
        ><Basket class="text-lightSecondary-800" :size="48" decorative
      /></IdleMessage>
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
import IdleMessage from './IdleMessage.vue'
import Basket from 'vue-material-design-icons/Basket.vue'

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
  components: { ProductDescription, Cart, IdleMessage, Basket },
})
</script>
