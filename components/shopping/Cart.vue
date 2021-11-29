<template>
  <div class="flex flex-col o-2">
    <CartProduct
      v-for="product in $store.state.cart"
      :key="product.id"
      :product="product"
    />
    <form>
      <script
        src="https://checkout.wompi.co/widget.js"
        data-render="button"
        data-public-key="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf"
        data-currency="COP"
        :data-amount-in-cents="$store.getters.cartTotalPrice"
        data-reference="5WR4HMN3A55L"
      ></script>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartProduct from './CartProduct.vue'
export default Vue.extend({ components: { CartProduct } })
</script>
