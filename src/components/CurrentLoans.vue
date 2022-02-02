<template>
  <h1>
    Your Loan Calculations
  </h1>

  <StartLoanButton />

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
