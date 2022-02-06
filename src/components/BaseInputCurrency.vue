<template>
  <div class="flex items-stretch">
    <CurrencyDropdown
      :value="currency"
      class="border border-r-0 border-gray-300 rounded-l"
      v-bind="{ required }"
      @input="(event) => $emit('update:currency', event.target.value)"
    />
    <BaseInput
      v-bind="{ id, placeholder, required }"
      class="flex-1 rounded-l-none"
      type="number"
      :value="amount"
      @input="(event) => $emit('update:amount', event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import CurrencyDropdown from '@/components/CurrencyDropdown.vue'

export default defineComponent({
  components: {
    BaseInput,
    CurrencyDropdown
  },

  props: {
    id: {
      default: '',
      type: String
    },

    amount: {
      default: '',
      type: [String, Number]
    },

    currency: {
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
  },

  emits: ['update:amount', 'update:currency']
})
</script>
