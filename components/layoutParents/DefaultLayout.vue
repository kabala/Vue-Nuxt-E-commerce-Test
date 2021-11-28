<template>
  <div>
    <header class="bg-primary z-50 sticky top-0">
      <div
        class="lg:px-5 container mx-auto flex flex-row flex-nowrap justify-center md:justify-between items-center h-20"
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
    <div class="container mx-auto flex mt-2.5 mb-10 gap-8 lg:px-5">
      <main class="w-full md:w-2/3 lg:w-3/4"><slot /></main>
      <aside class="w-full md:w-1/3 lg:w-1/4"><slot name="aside" /></aside>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
