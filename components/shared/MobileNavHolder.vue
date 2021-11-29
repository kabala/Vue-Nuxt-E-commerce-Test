<template>
  <breakpoint>
    <div class="w-full" slot-scope="{ smDown }">
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
