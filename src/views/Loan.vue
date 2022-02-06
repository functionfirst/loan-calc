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
import { computed, defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import HeadingWithMargin from '@/components/HeadingWithMargin.vue'
import LoanDetailsBreakdown from '@/components/LoanDetailsBreakdown.vue'
import LoanDetailsTotalInterest from '@/components/LoanDetailsTotalInterest.vue'
import LoanDetailsHeading from '@/components/LoanDetailsHeading.vue'
import LoanDetailsOptions from '@/components/LoanDetailsOptions.vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { formatDate } from '@/libs/dates'
import { formatCurrency } from '@/libs/formatCurrency'

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
    const { getters, dispatch } = useStore()
    const loan = computed(() => getters.loanById(params.id))
    const editLoan = () => dispatch('editLoan', +params.id)
    const totalInterest = formatCurrency(loan.value.totalInterest.amount, loan.value.totalInterest.currency)
    const loanAmount = formatCurrency(loan.value.loanAmount.amount, loan.value.loanAmount.currency)
    const endDate = formatDate(loan.value.endDate)
    const startDate = formatDate(loan.value.startDate)

    return {
      baseInterestRate: loan.value.baseInterestRate,
      breakdown: loan.value.breakdown,
      editLoan,
      endDate,
      startDate,
      formatDate,
      formatCurrency,
      lender: loan.value.lender,
      loanAmount,
      margin: loan.value.margin,
      totalInterest
    }
  }
})
</script>
