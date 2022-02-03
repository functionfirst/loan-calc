<template>
  <BaseInput
    v-bind="$attrs"
    type="text"
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
