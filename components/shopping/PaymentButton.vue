<template>
  <form>
    <script
      src="https://checkout.wompi.co/widget.js"
      data-render="button"
      data-public-key="pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf"
      data-currency="COP"
      :data-amount-in-cents="cartTotalPrice * 100"
      data-reference="5WR4HMN3A55L"
    ></script>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: mapGetters(['cartTotalPrice']),
})
</script>
