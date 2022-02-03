<template>
  <BaseButton class="border-primary-100 hover:border-primary-200 text-primary-100 hover:text-primary-200">
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
