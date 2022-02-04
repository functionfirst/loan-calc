<template>
  <div class="flex items-stretch">
    <CurrencyDropdown class="border border-r-0 border-gray-300 rounded-l" />
    <InputNumber
      v-bind="{ id, placeholder, required }"
      class="flex-1 rounded-l-none"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CurrencyDropdown from '@/components/CurrencyDropdown.vue'
import InputNumber from '@/components/InputNumber.vue'

export default defineComponent({
  components: {
    CurrencyDropdown,
    InputNumber
  },

  props: {
    id: {
      default: '',
      type: String
    },

    placeholder: {
      default: '',
      type: String
    },

    required: {
      default: false,
      type: Boolean
    }
  }
})
</script>
