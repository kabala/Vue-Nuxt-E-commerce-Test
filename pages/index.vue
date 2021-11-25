<template>
  <DefaultLayoutVue>
    <template #header>
      <div>
        <h1>Hola</h1>
      </div>
    </template>
    <h2>asd</h2>
    <template #aside>asdasdasdasd</template>
  </DefaultLayoutVue>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayoutVue from '~/components/layoutParents/DefaultLayout.vue'

export default Vue.extend({
  components: { DefaultLayoutVue },
  mounted() {
    console.log(this.$store.state)
  },
})
</script>
