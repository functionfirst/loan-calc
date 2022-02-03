<template>
  <RBC class="sticky left-0 z-10">
    <slot />
  </RBC>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RBC from '@/components/ResponsiveBodyCell.vue'

export default defineComponent({
  components: {
    RBC
  }
})
</script>
