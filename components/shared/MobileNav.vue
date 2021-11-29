<template>
  <div
    class="container bg-lightSecondary-600 mx-auto flex items-center justify-center h-20 fixed bottom-0 l-0 z-20"
  >
    <nav class="flex">
      <button
        @click="() => setActiveButton(mobileButtons.store)"
        :class="{ active: activeMobileButton === mobileButtons.store }"
        class="rounded-l-xl mobile-nav-button"
      >
        <Store :size="28" decorative /><span>Tienda</span>
      </button>
      <button
        @click="() => setActiveButton(mobileButtons.cart)"
        :class="{ active: activeMobileButton === mobileButtons.cart }"
        class="rounded-r-xl mobile-nav-button"
      >
        <Cart :size="28" decorative /><span>Carrito</span>
      </button>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Store from 'vue-material-design-icons/Store.vue'
import Cart from 'vue-material-design-icons/Cart.vue'
import { MobileButtons } from '~/types/ui'
import { PropValidator } from 'vue/types/options'

export default Vue.extend({
  props: {
    activeMobileButton: {
      type: String,
      required: true,
    } as PropValidator<MobileButtons>,
  },
  data() {
    return {
      mobileButtons: Object.freeze(MobileButtons),
    }
  },
  methods: {
    setActiveButton(buttonID: MobileButtons) {
      this.$emit('updateActiveButton', buttonID)
      this.$store.commit('hideProductInfo')
    },
  },
  components: { Store, Cart },
})
</script>
ª
<style scoped>
.mobile-nav-button {
  @apply bg-white text-secondary
  font-medium flex flex-col justify-center items-center
  w-32 h-16;
}

.active {
  @apply bg-secondary text-white;
}
</style>
