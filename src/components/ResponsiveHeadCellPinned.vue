<template>
  <RHC class="left-0 z-10">
    <slot />
  </RHC>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RHC from '@/components/ResponsiveHeadCell.vue'

export default defineComponent({
  components: {
    RHC
  }
})
</script>
