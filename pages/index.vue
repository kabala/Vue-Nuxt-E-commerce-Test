<template>
  <DefaultLayoutVue>
    <template #header>
      <HeaderVue />
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
import HeaderVue from '~/components/shared/Header.vue'

export default Vue.extend({
  components: { DefaultLayoutVue, ProductsList, SidebarInfo, HeaderVue },
})
</script>
