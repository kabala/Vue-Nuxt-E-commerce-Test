<template>
  <div>
    <header class="bg-primary">
      <div
        class="container mx-auto flex flex-row flex-nowrap justify-center md:justify-between items-center h-20"
      >
        <div class="md:flex-1 flex-none">
          <h1>
            <img src="/logo.svg" alt="Random Store" />
          </h1>
        </div>
        <div class="flex-none hidden md:block">
          <slot name="header" />
        </div>
      </div>
    </header>
    <div class="container mx-auto flex my-2.5 gap-8">
      <main class="w-2/3"><slot /></main>
      <aside class="w-1/3"><slot name="aside" /></aside>
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
