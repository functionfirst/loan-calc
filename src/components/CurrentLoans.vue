<template>
  <header class="flex flex-col md:flex-row gap-2 items-center md:items-start justify-between mb-6">
    <Heading class="text-center md:text-left">
      Your Loan Calculations
    </Heading>

    <StartLoanButton @click="$emit('newLoan')" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Heading from '@/components/Heading.vue'
import StartLoanButton from '@/components/StartLoanButton.vue'

export default defineComponent({
  components: {
    Heading,
    StartLoanButton
  },

  emits: ['newLoan']
})
</script>
