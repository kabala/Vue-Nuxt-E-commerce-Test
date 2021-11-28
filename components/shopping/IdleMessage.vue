<template>
  <div class="iddle-message">
    <slot />
    <p class="mt-2 text-lightSecondary-900">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.iddle-message {
  @apply flex flex-col justify-center mt-14
  items-center
  rounded-lg border-2 py-12 px-5
  border-lightSecondary-700;
  aspect-ratio: 4 / 3;
}
</style>
