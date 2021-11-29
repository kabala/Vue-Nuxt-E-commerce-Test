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
    <main class="w-full md:w-2/3 lg:w-3/4"><slot /></main>
    <slot name="aside" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MobileNavHolder from '../shared/MobileNavHolder.vue'

export default Vue.extend({
  components: { MobileNavHolder },
  mounted() {
    function toggleMainScroll(e: Event) {
      const target = e.target as HTMLElement
      if (target.closest('.mobile-nav-button')) {
        document.body.classList.toggle('lock-scroll')
      }
    }

    document.body.addEventListener('click', toggleMainScroll)

    this.$once('hook:beforeDestroy', () =>
      document.body.removeEventListener('click', toggleMainScroll)
    )
  },
})
</script>
