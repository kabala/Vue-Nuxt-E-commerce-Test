<template>
  <breakpoint>
    <div slot-scope="{ smDown }">
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
      <div
        class="pb-20 m:pb-0 container mx-auto flex mt-2.5 mb-10 gap-8 lg:px-5"
      >
        <main class="w-full md:w-2/3 lg:w-3/4"><slot /></main>
        <aside class="sidebar">
          <slot name="aside" />
        </aside>
      </div>
      <MobileNav v-if="smDown" />
    </div>
  </breakpoint>
</template>

<script lang="ts">
import Vue from 'vue'
import MobileNav from '../shared/MobileNav.vue'

export default Vue.extend({
  components: { MobileNav },
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

<style scoped>
.sidebar {
  height: calc(100vh - 5rem);

  @apply fixed left-0 bottom-20 z-10 bg-white px-6
  md:relative md:w-full md:w-1/3 lg:w-1/4 md:px-0 md:h-auto md:bg-transparent;
}
</style>
