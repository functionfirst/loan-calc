<template>
  <div class="max-w-md mx-auto text-center grid gap-6 mt-8">
    <h1 class="text-2xl font-medium">
      No Loan Calculations Created
    </h1>

    <div class="mx-auto rounded-full bg-gray-700 flex items-center justify-center text-white h-48 w-48">
      <IconLicense class="w-24 h-24" />
    </div>

    <p>
      You have not created any commercial or personal loan calculations
    </p>

    <StartLoanButton class="mx-auto" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconLicense from './IconLicense.vue'
import StartLoanButton from './StartLoanButton.vue'

export default defineComponent({
  components: {
    IconLicense,
    StartLoanButton
  }
})
</script>
