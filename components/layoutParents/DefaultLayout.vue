<template>
  <div>
    <header class="h">
      <div class="h__inner mw9 center">
        <div class="h__logo">
          <h1>
            <img src="/logo.svg" alt="Random Store" />
          </h1>
        </div>
        <div class="h__options">
          <slot name="header" />
        </div>
      </div>
    </header>
    <div class="mw9 center">
      <div class="c flex">
        <main class="c__list w-75"><slot /></main>
        <aside class="c__aside w-25"><slot name="aside" /></aside>
      </div>
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
