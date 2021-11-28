<template>
  <div>
    <figure class="image-holder">
      <img :src="activeProduct.picture" :alt="activeProduct.name" />
    </figure>
    <div class="p-4">
      <h3 class="text-primary-400 mb-2 font-semibold text-2xl">
        {{ activeProduct.name }}
      </h3>
      <p>{{ activeProduct.description }}</p>
      <div class="flex items-center mt-6">
        <strong class="mr-2 text-secondary font-bold text-2xl"
          >${{ activeProduct.price }}</strong
        >
        <StarRanking :ranking="activeProduct.ranking" />
      </div>
      <div class="my-6">
        <button
          class="w-full lg:w-3/4 bg-primary-400 hover:bg-primary-300 transition-colors text-white text-lg h-12 block mx-auto font-medium px-8 rounded-lg"
          v-if="!activeProduct.quantity"
          @click="() => $store.commit('addProduct', activeProduct)"
        >
          Añadir al carrito
        </button>
        <div
          class="flex justify-between items-center py-3 border-t border-b border-black border-opacity-10"
          v-else
        >
          <span class="text-primary-400">unidades en el carrito</span>
          <div class="quantity-changer">
            <button
              class="changer"
              aria-label="reducir cantidad en el carrito"
              @click="
                () => $store.dispatch('decreaseQuantityOrDelete', activeProduct)
              "
            >
              <Minus decorative />
            </button>
            <span class="px-4 font-semibold text-lg text-secondary">{{
              activeProduct.quantity
            }}</span>
            <button
              class="changer"
              aria-label="aumentar cantidad en el carrito"
              @click="
                () => $store.commit('increaseProductQuantity', activeProduct)
              "
            >
              <Plus decorative />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { starMapper } from '~/utils/ui'
import StarRanking from './StarRanking.vue'
import CartPlus from 'vue-material-design-icons/CartPlus.vue'
import Minus from 'vue-material-design-icons/Minus.vue'
import Plus from 'vue-material-design-icons/Plus.vue'

export default Vue.extend({
  computed: {
    ...mapGetters(['activeProduct']),
    stars() {
      return starMapper(this.activeProduct.ranking)
    },
  },
  components: { StarRanking, CartPlus, Minus, Plus },
})
</script>

<style scoped>
.image-holder {
  aspect-ratio: 4 / 3;
  @apply rounded-lg overflow-hidden;
}

.changer {
  @apply bg-primary-400 text-white w-7 h-7
  hover:bg-primary-300 transition-colors
  font-semibold rounded-2xl inline-flex
  items-center justify-center;
}

.quantity-changer {
  @apply flex items-center bg-white rounded-2xl;
}
</style>
