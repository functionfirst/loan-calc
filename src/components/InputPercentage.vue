<template>
  <div class="flex">
    <BaseInput
      v-bind="{ id, placeholder, required }"
      type="number"
      min="0"
      class="rounded-r-none"
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
