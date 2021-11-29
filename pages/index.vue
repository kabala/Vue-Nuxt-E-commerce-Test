<template>
  <DefaultLayoutVue>
    <template #header>
      <HeaderVue />
    </template>
    <ProductsList />
    <template #aside>
      <MobileNavHolder />
    </template>
  </DefaultLayoutVue>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayoutVue from '~/components/layoutParents/DefaultLayout.vue'
import ProductsList from '~/components/shopping/ProductsList.vue'
import HeaderVue from '~/components/shared/Header.vue'
import MobileNavHolder from '~/components/shared/MobileNavHolder.vue'
import fakeData from 'static/fakeData.json'

export default Vue.extend({
  components: {
    DefaultLayoutVue,
    ProductsList,
    HeaderVue,
    MobileNavHolder,
  },
  created() {
    this.$store.commit('hideProductInfo')
    this.$store.commit('setProducts', fakeData)
  },
})
</script>
