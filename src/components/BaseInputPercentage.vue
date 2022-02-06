<template>
  <div class="flex">
    <BaseInput
      v-bind="{ id, placeholder, required, step }"
      type="number"
      min="0"
      class="rounded-r-none"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
    <label
      :for="id"
      class="border border-l-0 border-gray-300 flex items-center justify-center rounded-r w-12 bg-gray-100"
    >
      <IconPercentage class="h-6 w-6" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import IconPercentage from '@/components/IconPercentage.vue'

export default defineComponent({
  components: {
    BaseInput,
    IconPercentage
  },

  props: {
    id: {
      default: '',
      type: String
    },

    modelValue: {
      default: '',
      type: [String, Number]
    },

    placeholder: {
      default: '',
      type: String
    },

    step: {
      default: 0.01,
      type: Number
    },

    required: {
      default: false,
      type: Boolean
    }
  },

  emits: ['update:modelValue']
})
</script>
