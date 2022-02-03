<template>
  <BaseInput
    v-bind="{ id, placeholder }"
    type="number"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from '@/components/BaseInput.vue'

export default defineComponent({
  components: {
    BaseInput
  },

  props: {
    id: {
      default: '',
      type: String
    },

    placeholder: {
      default: '',
      type: String
    }
  }
})
</script>
