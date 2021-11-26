<template>
  <a
    href="/"
    @click.prevent="() => $store.commit('showProductInfo', productData)"
  >
    <div class="product">
      <figure class="product__image">
        <div v-if="productData.quantity" class="product_q">
          {{ productData.quantity }}
        </div>
        <img :src="productData.picture" :alt="productData.name" />
      </figure>
      <div class="product__info">
        <h3>{{ productData.name }}</h3>
      </div>
      <div class="product__details">
        <div class="product__price">
          <strong>{{ productData.price }}</strong>
          <StarRanking :ranking="productData.ranking" />
        </div>
        <div>
          <button
            aria-label="Añadir al carrito"
            @click.prevent="() => $store.commit('addProduct', productData)"
          >
            <CartPlus />
          </button>
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
