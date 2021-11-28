<template>
  <div class="flex flex-col o-2">
    <CartProduct
      v-for="product in $store.state.cart"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartProduct from './CartProduct.vue'
export default Vue.extend({ components: { CartProduct } })
</script>
