<template>
  <a
    href="/"
    @click.prevent="() => $store.commit('showProductInfo', productData)"
    class="card"
  >
    <div class="product">
      <figure class="relative">
        <div v-if="productData.quantity" class="quantity">
          {{ productData.quantity }}
        </div>
        <img :src="productData.picture" :alt="productData.name" />
      </figure>
      <div class="p-3">
        <div>
          <h3 class="font-medium text-primary text-xl my-2">
            {{ productData.name }}
          </h3>
          <p class="truncate">{{ productData.description }}</p>
        </div>
        <div class="flex justify-between mt-4">
          <div class="product__price flex items-center">
            <strong class="mr-3 text-xl text-secondary"
              >${{ productData.price }}</strong
            >
            <StarRanking decorative :ranking="productData.ranking" />
          </div>
          <div>
            <button
              class="action-button"
              aria-label="Añadir al carrito"
              @click.prevent="
                () => $store.dispatch('addOrIncreaseQuantity', productData)
              "
            >
              <CartPlus decorative :size="28" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import CartPlus from 'vue-material-design-icons/CartPlus.vue'
import { productDataPropMixin } from '~/mixins/mixins'
import StarRanking from './StarRanking.vue'

export default Vue.extend({
  components: {
    CartPlus,
    StarRanking,
  },
  mixins: [productDataPropMixin],
})
</script>
