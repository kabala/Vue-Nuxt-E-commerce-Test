<template>
  <div class="flex">
    <button
      class="header-button"
      :aria-label="ariaMessage"
      @click="$store.commit('hideProductInfo')"
    >
      <CartArrowRight class="text-white text-opacity-100" />
      <span class="ml-4 text-lg" v-currency>{{
        $store.getters.cartTotalPrice
      }}</span>
    </button>
    <button v-if="!isCartEmpty" @click="$store.commit('clearCart')">
      <CartRemove1 class="delete-cart-button ml-2" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartArrowRight from 'vue-material-design-icons/CartArrowRight.vue'
import CartRemove1 from 'vue-material-design-icons/CartRemove.vue'
export default Vue.extend({
  components: { CartArrowRight, CartRemove1 },
  computed: {
    isCartEmpty() {
      return !this.$store.getters.cartTotalPrice
    },
    ariaMessage() {
      return this.isCartEmpty
        ? 'Tu carrito está vacío'
        : `Tus items acumulan un valor de \$${this.$store.getters.cartTotalPrice} pesos`
    },
  },
})
</script>
