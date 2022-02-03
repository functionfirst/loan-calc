<template>
  <header class="flex flex-col md:flex-row gap-2 items-center justify-between mb-6">
    <Heading>
      Your Loan Calculations
    </Heading>

    <StartLoanButton />
  </header>

  <!-- @todo loop over this for each loan set -->
  <LoanList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Heading from '@/components/Heading.vue'
import LoanList from '@/components/LoanList.vue'
import StartLoanButton from '@/components/StartLoanButton.vue'

export default defineComponent({
  components: {
    Heading,
    LoanList,
    StartLoanButton
  }
})
</script>
