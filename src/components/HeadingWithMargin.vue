<template>
  <BaseHeading
    :tag="tag"
    class="mt-6 mb-1"
  >
    <slot />
  </BaseHeading>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseHeading from '@/components/BaseHeading.vue'

export default defineComponent({
  components: {
    BaseHeading
  },

  props: {
    tag: {
      default: 'h1',
      type: String
    }
  }
})
</script>
