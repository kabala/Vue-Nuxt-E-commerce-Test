<template>
  <ul class="flex" :aria-label="ariaText">
    <li aria-hidden="true" v-for="(star, index) in stars" :key="index">
      <StarIcon :size="14" decorative v-if="star" class="text-secondary" />
      <StarHalfIcon
        :size="14"
        decorative
        class="text-secondary-400 text-opacity-80"
        v-else
      />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import StarIcon from 'vue-material-design-icons/Star.vue'
import StarHalfIcon from 'vue-material-design-icons/StarHalfFull.vue'
import { starMapper } from '~/utils/ui'

export default Vue.extend({
  components: { StarIcon, StarHalfIcon },
  props: {
    ranking: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ariaText() {
      return `ranking ${this.ranking} stars`
    },
    stars() {
      return starMapper(this.ranking)
    },
  },
})
</script>
