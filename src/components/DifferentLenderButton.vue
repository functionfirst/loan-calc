<template>
  <SecondaryButton>
    <IconBank class="h-6 w-6" />
    Try a different Lender
  </SecondaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBank from '@/components/IconBank.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'

export default defineComponent({
  components: {
    IconBank,
    SecondaryButton
  }
})
</script>
