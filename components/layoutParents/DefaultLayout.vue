<template>
  <div>
    <header class="h">
      <div class="h__logo"></div>
      <div class="h__options">
        <slot name="header" />
      </div>
    </header>
    <div class="c">
      <main class="c__list"><slot /></main>
      <aside class="c__aside"><slot name="aside" /></aside>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    console.log(this.$store.state)
  },
})
</script>
