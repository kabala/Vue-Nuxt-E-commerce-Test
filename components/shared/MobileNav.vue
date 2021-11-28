<template>
  <div
    class="container bg-lightSecondary-600 mx-auto flex items-center justify-center h-20 fixed bottom-0 l-0"
  >
    <nav class="flex">
      <button class="rounded-l-xl mobile-nav-button">
        <Store :size="28" decorative /><span>Tienda</span>
      </button>
      <button class="rounded-r-xl mobile-nav-button">
        <Cart :size="28" decorative /><span>Carrito</span>
      </button>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Store from 'vue-material-design-icons/Store.vue'
import Cart from 'vue-material-design-icons/Cart.vue'

export default Vue.extend({
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
