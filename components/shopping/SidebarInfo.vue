<template>
  <div class="sidebar" :class="{ popup: shouldPopMobileInfo }">
    <div
      class="relative flex flex-col md:sticky top-auto md:top-24 h-full md:h-auto"
    >
      <div
        class="flex items-center h-14 flex-grow-1 flex-shrink-0"
        v-if="sidebarTitle"
      >
        <button
          v-if="isMobile"
          @click="() => $emit('hideMobileFloatingScreen')"
          aria-label="ocultar"
          class="w-7 h-7 flex items-center justify-center text-primary-400 mr-2"
        >
          <ChevronLeft :size="20" decorative />
        </button>
        <h2 class="font-medium text-secondary text-xl">
          {{ sidebarTitle }}
        </h2>
      </div>
      <div class="flex-auto flex flex-col min-h-0">
        <ProductDescription
          v-if="$store.getters.currentSideInfo === sidebarStatus.product"
        />
        <IdleMessage
          v-show="$store.getters.currentSideInfo === sidebarStatus.iddle"
          message="Selecciona un producto"
          ><Basket class="text-lightSecondary-800" :size="48" decorative
        /></IdleMessage>
        <Cart
          v-show="$store.getters.currentSideInfo === sidebarStatus.cart"
          :isMobile="isMobile"
        />
      </div>
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
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import { PropValidator } from 'vue/types/options'
import { MobileButtons } from '~/types/ui'

export default Vue.extend({
  props: {
    activeMobileButton: {
      type: String,
      required: true,
    } as PropValidator<MobileButtons>,
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
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
    shouldPopMobileInfo() {
      return this.isMobile
        ? this.activeMobileButton === MobileButtons.cart ||
            this.$store.getters.currentSideInfo === infoView.product
        : false
    },
  },
  watch: {
    shouldPopMobileInfo(newVal) {
      if (newVal) {
        document.body.classList.add('lock-scroll')
      } else {
        document.body.classList.remove('lock-scroll')
      }
    },
  },
  components: { ProductDescription, Cart, IdleMessage, Basket, ChevronLeft },
})
</script>

<style scoped>
.sidebar {
  height: calc(100vh - 10rem);

  @apply fixed left-0 md:left-auto -bottom-full md:bottom-auto z-10 bg-white px-6
  md:relative w-full md:px-0 md:h-auto md:bg-transparent md:sticky md:top-20 pb-4;
}

.popup {
  @apply bottom-20;
}
</style>
