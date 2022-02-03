<template>
  <PrimaryButton size="lg">
    <IconCirclePlus class="h-6 w-6" />
    Start a new loan calculation
  </PrimaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconCirclePlus from '@/components/IconCirclePlus.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'

export default defineComponent({
  components: {
    IconCirclePlus,
    PrimaryButton
  }
})
</script>
