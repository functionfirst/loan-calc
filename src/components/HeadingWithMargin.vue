<template>
  <Heading
    :tag="tag"
    class="mt-6 mb-1"
  >
    <slot />
  </Heading>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Heading from '@/components/Heading.vue'

export default defineComponent({
  components: {
    Heading
  },

  props: {
    tag: {
      default: 'h1',
      type: String
    }
  }
})
</script>
