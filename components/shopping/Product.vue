<template>
  <div class="product">
    <figure class="product__image">
      <img :src="productData.picture" :alt="productData.name" />
    </figure>
    <div class="product__info">
      <h3>{{ productData.name }}</h3>
      <p>{{ productData.description }}</p>
    </div>
    <div class="product__details">
      <div class="product__price">
        <strong>{{ productData.price }}</strong>
        <ul>
          <li v-for="(star, index) in stars" :key="index">
            <StarIcon v-if="star" />
            <StarHalfIcon v-else />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Product } from '~/store'
import StarIcon from 'vue-material-design-icons/Star.vue'
import StarHalfIcon from 'vue-material-design-icons/StarHalfFull.vue'

export default Vue.extend({
  components: {
    StarIcon,
    StarHalfIcon,
  },
  props: {
    productData: {
      type: Object,
      required: true,
    } as PropOptions<Product>,
  },
  computed: {
    stars() {
      const { ranking } = this.productData
      return Array.from({ length: 5 }, (_, k) => k <= ranking)
    },
  },
})
</script>
