<template>
  <div class="max-w-md mx-auto text-center grid gap-6 mt-8">
    <BaseHeading>
      No Loan Calculations Created
    </BaseHeading>

    <div class="mx-auto rounded-full bg-gray-400 flex items-center justify-center text-white h-48 w-48">
      <IconLicense class="w-24 h-24" />
    </div>

    <p class="text-gray-900">
      You have not created any commercial or personal loan calculations
    </p>

    <StartLoanButton
      class="mx-auto"
      @click="$emit('newLoan')"
    />
  </div>
</template>

<script setup lang="ts">
import BaseHeading from '@/components/BaseHeading.vue'
import IconLicense from '@/components/IconLicense.vue'
import StartLoanButton from '@/components/StartLoanButton.vue'

defineEmits(['newLoan'])
</script>
