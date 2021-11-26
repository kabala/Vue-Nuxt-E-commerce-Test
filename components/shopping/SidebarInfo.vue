<template>
  <div class="sidebar">
    <div v-if="sidebarTitle" class="sidebar__title">
      <h2>{{ sidebarTitle }}</h2>
    </div>
    <div class="sidebar__content">
      <ProductDescription
        v-if="$store.getters.currentSideInfo === sidebarStatus.product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { infoView } from '~/store'
import ProductDescription from './ProductDescription.vue'

export default Vue.extend({
  data() {
    return {
      sidebarStatus: infoView,
    }
  },
  mounted() {
    console.log('getters', this.$store.getters)
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
  components: { ProductDescription },
})
</script>
