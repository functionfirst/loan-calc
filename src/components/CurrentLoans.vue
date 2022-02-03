<template>
  <div class="flex flex-col md:flex-row gap-2 items-center justify-between mb-6">
    <h1 class="text-2xl font-medium">
      Your Loan Calculations
    </h1>

    <StartLoanButton />
  </div>

  <!-- @todo loop over this for each loan set -->
  <LoanList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StartLoanButton from './StartLoanButton.vue'
import LoanList from './LoanList.vue'

export default defineComponent({
  components: {
    LoanList,
    StartLoanButton
  }
})
</script>
