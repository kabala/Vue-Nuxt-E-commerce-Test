<template>
  <div>
    <div>
      <h2 class="font-semibold text-2xl text-secondary my-3">
        Últimas Ofertas
      </h2>
    </div>
    <div class="grid grid-cols-2 gap-4">
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
})
</script>
