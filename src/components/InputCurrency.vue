<template>
  <CurrencyDropdown />
  <InputNumber :id="$attrs.id" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CurrencyDropdown from '@/components/CurrencyDropdown.vue'
import InputNumber from '@/components/InputNumber.vue'

export default defineComponent({
  components: {
    CurrencyDropdown,
    InputNumber
  }
})
</script>
