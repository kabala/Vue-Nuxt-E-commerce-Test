<template>
  <ul>
    <li aria-hidden="true" v-for="(star, index) in stars" :key="index">
      <StarIcon v-if="star" />
      <StarHalfIcon v-else />
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
    stars() {
      return starMapper(this.ranking)
    },
  },
})
</script>
