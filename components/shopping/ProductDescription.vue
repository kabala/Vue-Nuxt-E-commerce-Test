<template>
  <div class="description">
    <figure class="side-product__image">
      <img :src="activeProduct.picture" :alt="activeProduct.name" />
    </figure>
    <div class="side-product__info">
      <h3>{{ activeProduct.name }}</h3>
      <p>{{ activeProduct.description }}</p>
    </div>
    <div class="side-product__details">
      <div class="side-product__price">
        <strong>{{ activeProduct.price }}</strong>
        <StarRanking :ranking="activeProduct.ranking" />
      </div>
      <div>
        <button
          v-if="!activeProduct.quantity"
          @click="() => $store.commit('addProduct', activeProduct)"
        >
          Añadir al carrito
        </button>
        <template v-else>
          <span>unidades en el carrito</span>
          <div>
            <button
              aria-label="decrease product quantity"
              @click="
                () => $store.dispatch('decreaseQuantityOrDelete', activeProduct)
              "
            >
              -
            </button>
            <span>{{ activeProduct.quantity }}</span>
            <button
              aria-label="increase product quantity"
              @click="
                () => $store.commit('increaseProductQuantity', activeProduct)
              "
            >
              +
            </button>
          </div>
        </template>
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

export default Vue.extend({
  computed: {
    ...mapGetters(['activeProduct']),
    stars() {
      return starMapper(this.activeProduct.ranking)
    },
  },
  components: { StarRanking, CartPlus },
})
</script>
