<template>
  <div class="flex flex-col o-2">
    <CartProduct
      v-for="product in $store.state.cart"
      :key="product.id"
      :product="product"
    />
    <button
      v-if="!readyToPay"
      @click="() => (readyToPay = true)"
      class="cart-action-button"
    >
      Pagar Ahora
    </button>
    <PaymentButton v-if="readyToPay" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartProduct from './CartProduct.vue'
import PaymentButton from './PaymentButton.vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  components: { CartProduct, PaymentButton },
  data: () => ({
    readyToPay: false,
  }),
  computed: mapGetters(['cartTotalPrice']),
  watch: {
    cartTotalPrice(current, prev) {
      if (current !== prev) {
        this.readyToPay = false
      }
    },
  },
})
</script>
