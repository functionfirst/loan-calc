<template>
  <BaseInput
    v-bind="$attrs"
    type="date"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from '@/components/BaseInput.vue'

export default defineComponent({
  components: {
    BaseInput
  }
})
</script>
