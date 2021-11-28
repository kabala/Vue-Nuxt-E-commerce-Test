import Vue from 'vue'
import { BreakpointPlugin } from 'vue-breakpoint'

Vue.use(BreakpointPlugin, {
  print: { print: true },
  portrait: { orientation: 'portrait' },
  mobile: { maxWidth: '600px' },
  mobilePortrait: { maxWidth: '600px', orientation: 'portrait' },
  tablet: { minWidth: '601px', maxWidth: '800px' },
  desktop: { minWidth: '801px' },
})

export default () => {}
