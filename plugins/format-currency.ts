import Vue, { DirectiveFunction } from 'vue'

const formatToCOP: DirectiveFunction = (el: HTMLElement, binding, n) => {
  el.innerHTML = Number(n.children[0].text).toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
  })
}

Vue.directive('currency', {
  update: formatToCOP,
  inserted: formatToCOP,
})

export default () => {}
