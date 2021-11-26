<template>
  <DefaultLayoutVue>
    <template #header>
      <div>
        <h1>Hola</h1>
      </div>
    </template>
    <ProductsList />
    <template #aside>
      <SidebarInfo />
    </template>
  </DefaultLayoutVue>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayoutVue from '~/components/layoutParents/DefaultLayout.vue'
import ProductsList from '~/components/shopping/ProductsList.vue'
import SidebarInfo from '~/components/shopping/SidebarInfo.vue'

export default Vue.extend({
  components: { DefaultLayoutVue, ProductsList, SidebarInfo },
  /*
  async fetch({ store }) {
    store.dispatch('getInitialProducts')
  },
  */
})
</script>
