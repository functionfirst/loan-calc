<template>
  <div class="flex flex-col relative max-h-screen p-4 md:p-6">
    <LoanDetailsHeading :lender="lender" />

    <Card class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-center p-4 md:p-6">
      <LoanDetailsOptions
        v-bind="{ loanAmount, margin, baseInterestRate, startDate, endDate }"
        @editLoan="editLoan"
      />
    </Card>

    <HeadingWithMargin tag="h2">
      Breakdown of loan over its lifetime
    </HeadingWithMargin>

    <Card class="flex-1 overflow-hidden">
      <LoanDetailsBreakdown :breakdown="breakdown" />
    </Card>

    <LoanDetailsTotalInterest :total-interest="totalInterest" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import HeadingWithMargin from '@/components/HeadingWithMargin.vue'
import LoanDetailsBreakdown from '@/components/LoanDetailsBreakdown.vue'
import LoanDetailsTotalInterest from '@/components/LoanDetailsTotalInterest.vue'
import LoanDetailsHeading from '@/components/LoanDetailsHeading.vue'
import LoanDetailsOptions from '@/components/LoanDetailsOptions.vue'
import { useRoute } from 'vue-router'
import useLoan from '@/composables/useLoan'

export default defineComponent({
  components: {
    Card,
    LoanDetailsHeading,
    HeadingWithMargin,
    LoanDetailsTotalInterest,
    LoanDetailsBreakdown,
    LoanDetailsOptions
  },

  setup () {
    const { params } = useRoute()
    const loan = useLoan(params.id.toString())
    return loan
  }
})
</script>
