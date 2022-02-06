<template>
  <IconLoader
    v-show="loading"
    class="animate-spin h-6 w-6"
  />
  <slot
    v-if="loading"
    name="loader"
  >
    Loading...
  </slot>
  <slot v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconLoader from '@/components/IconLoader.vue'

export default defineComponent({
  components: {
    IconLoader
  },

  props: {
    loading: {
      default: false,
      type: Boolean
    }
  }
})
</script>
