<template>
  <BaseButton class="border-transparent bg-primary-100 hover:bg-primary-200 text-white">
    <slot />
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BaseButton from '@/components/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton
  }
})
</script>
