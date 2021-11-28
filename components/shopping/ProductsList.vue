<template>
  <div class="">
    <div>{{ $store.state.products.length }}</div>
    <div class="grid grid-flow-col grid-rows-6 gap-4">
      <div v-if="!$store.state.products.length">
        <h4>Lo sentimos, no hay productos que mostrar en este momento.</h4>
        <button>Obtener Productos</button>
      </div>
      <template v-else>
        <Product
          v-for="product in $store.state.products"
          :key="product.id"
          :productData="product"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Product from './Product.vue'

export default Vue.extend({
  components: { Product },
  mounted() {
    console.log(this.$store.state.products)
  },
})
</script>
