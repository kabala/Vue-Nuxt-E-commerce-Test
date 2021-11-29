<template>
  <div class="flex flex-col justify-between md:justify-start flex-auto min-h-0">
    <div class="flex flex-col o-2 min-h-0 overflow-y-auto">
      <CartProduct
        v-for="product in $store.state.cart"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="mt-4 box-content h-auto">
      <div
        v-if="isMobile"
        class="flex items-center justify-between h-14 border-t border-b mb-4 border-lightSecondary-900"
      >
        <span class="text-primary-400">Total a pagar:</span>
        <strong class="text-secondary font-bold text-xl"
          >${{ $store.getters.cartTotalPrice }}</strong
        >
      </div>
      <div class="h-12">
        <button
          v-if="!readyToPay"
          @click="() => (readyToPay = true)"
          class="cart-action-button"
        >
          Pagar Ahora
        </button>
        <PaymentButton v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartProduct from './CartProduct.vue'
import PaymentButton from './PaymentButton.vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  components: { CartProduct, PaymentButton },
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
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
