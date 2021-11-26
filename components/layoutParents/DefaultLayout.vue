<template>
  <div class="mw9 center">
    <header class="h">
      <div class="h__logo"></div>
      <div class="h__options">
        <slot name="header" />
      </div>
    </header>
    <div class="c flex">
      <main class="c__list w-75"><slot /></main>
      <aside class="c__aside w-25"><slot name="aside" /></aside>
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
