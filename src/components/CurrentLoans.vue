<template>
  <header class="flex flex-col md:flex-row gap-2 items-center md:items-start justify-between mb-6">
    <BaseHeading class="text-center md:text-left">
      Your Loan Calculations
    </BaseHeading>

    <StartLoanButton @click="$emit('newLoan')" />
  </header>
</template>

<script setup lang="ts">
import BaseHeading from '@/components/BaseHeading.vue'
import StartLoanButton from '@/components/StartLoanButton.vue'

defineEmits(['newLoan'])
</script>
