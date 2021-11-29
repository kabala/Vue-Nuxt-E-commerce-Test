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
    <div class="container mx-auto flex flex-col md:flex-row">
      <main class="w-full md:w-2/3 lg:w-3/4 px-4 m:px-0 pb-24">
        <slot />
      </main>
      <aside
        class="m:pb-0 w-full mx-auto md:mx-0 md:w-1/3 lg:w-1/4 flex md:mb-10 gap-8 lg:px-5"
      >
        <slot name="aside" />
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MobileNavHolder from '../shared/MobileNavHolder.vue'

export default Vue.extend({
  components: { MobileNavHolder },
})
</script>
