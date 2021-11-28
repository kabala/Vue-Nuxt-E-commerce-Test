<template>
  <div class="relative">
    <div
      class="flex flex-row flex-nowrap justify-between rounded-lg overflow-hidden bg-white bg-opacity-80 hover:bg-opacity-100"
    >
      <div class="img-ratio w-20 flex">
        <img :src="product.picture" :alt="product.name" />
      </div>
      <div class="flex flex-col items-end justify-between text-right py-2 pr-9">
        <h5 class="font-medium text-sm mb-1">{{ product.name }}</h5>
        <div
          v-if="product.quantity > 1"
          class="flex border-b border-black border-opacity-10 pl-2 pr-1 text-sm"
        >
          <strong class="font-medium">${{ product.price }}</strong>
          &nbsp;x&nbsp;<span>{{ product.quantity }}</span>
        </div>
        <strong class="text-sm rounded-lg h-5 mt-1 bg-secondary text-white px-2"
          >${{ product.quantity * product.price }}</strong
        >
      </div>
    </div>
    <button
      class="absolute flex items-center justify-center -right-2 top-2 w-6 h-6 rounded-2xl bg-lightSecondary-600 text-primary-900 text-opacity-40 hover:bg-primary-400 hover:text-white hover:text-opacity-100"
      aria-label="eliminar producto del carrito"
      @click="() => $store.commit('removeProduct', product)"
    >
      <TrashCan decorative :size="12" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TrashCan from 'vue-material-design-icons/TrashCan.vue'

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: { TrashCan },
})
</script>

<style scoped>
.img-ratio {
  display: flex;
  aspect-ratio: 1 / 1;
}

img {
  object-fit: cover;
}
</style>
