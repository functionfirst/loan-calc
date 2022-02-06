<template>
  <input
    class="py-2 px-3 border border-gray-300 rounded w-full text-sm"
    :type="$attrs.type ?? 'text'"
    :value="modelValue"
    @input="(event) => $emit('update:modelValue', event.target.value)"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      default: '',
      type: [String, Number]
    }
  },

  emits: ['update:modelValue']
})
</script>
