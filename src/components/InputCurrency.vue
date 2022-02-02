<template>
  <CurrencyDropdown />
  <InputNumber :id="$attrs.id" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CurrencyDropdown from './CurrencyDropdown.vue'
import InputNumber from './InputNumber.vue'

export default defineComponent({
  components: {
    CurrencyDropdown,
    InputNumber
  }
})
</script>
