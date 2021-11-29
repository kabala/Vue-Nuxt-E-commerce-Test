<template>
  <breakpoint>
    <div
      slot-scope="{ smDown }"
      class="pb-20 m:pb-0 container mx-auto flex mt-2.5 mb-10 gap-8 lg:px-5"
    >
      <SidebarInfo
        @hideMobileFloatingScreen="hideMobileScreen"
        :isMobile="smDown"
        :activeMobileButton="activeButton"
      />
      <MobileNav
        v-if="smDown"
        @updateActiveButton="setActiveButton"
        :activeMobileButton="activeButton"
      />
    </div>
  </breakpoint>
</template>

<script lang="ts">
import Vue from 'vue'
import { MobileButtons } from '~/types/ui'
import MobileNav from './MobileNav.vue'
import SidebarInfo from '../shopping/SidebarInfo.vue'

export default Vue.extend({
  data() {
    return { activeButton: MobileButtons.store }
  },
  methods: {
    setActiveButton(buttonId: MobileButtons) {
      this.activeButton = buttonId
    },
    hideMobileScreen() {
      this.$store.commit('hideProductInfo')
      this.activeButton = MobileButtons.store
    },
  },
  components: { MobileNav, SidebarInfo },
})
</script>
