<template>
  <DefaultLayoutVue>
    <template #header>
      <div>
        <h1>Hola</h1>
      </div>
    </template>
    <ProductsList />
    <template #aside>asdasdasdasd</template>
  </DefaultLayoutVue>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayoutVue from '~/components/layoutParents/DefaultLayout.vue'
import ProductsList from '~/components/shopping/ProductsList.vue'

export default Vue.extend({
  components: { DefaultLayoutVue, ProductsList },
  async fetch({ store }) {
    store.dispatch('getInitialProducts')
  },
})
</script>
