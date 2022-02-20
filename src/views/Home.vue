<template>
  <div class="p-4 md:p-6">
    <template v-if="hasLoans">
      <CurrentLoans @newLoan="createNewLoan" />

      <div
        v-for="({ baseInterestRate, loanAmount, loans }, index) in loanSets"
        :key="index"
      >
        <HeadingWithMargin tag="h2">
          Loan Details
        </HeadingWithMargin>

        <LoanSetHeading
          v-bind="{ baseInterestRate, loanAmount }"
          @differentLender="createNewLoan({ baseInterestRate, loanAmount })"
        />

        <LoanList
          class="mt-6"
          :loans="loans"
        />
      </div>
    </template>

    <NoLoans
      v-else
      @newLoan="createNewLoan"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import useCalculator from '@/composables/useCalculator'
import CurrentLoans from '@/components/CurrentLoans.vue'
import HeadingWithMargin from '@/components/HeadingWithMargin.vue'
import LoanList from '@/components/LoanList.vue'
import LoanSetHeading from '@/components/LoanSetHeading.vue'
import NoLoans from '@/components/NoLoans.vue'

export default defineComponent({
  components: {
    CurrentLoans,
    HeadingWithMargin,
    LoanList,
    LoanSetHeading,
    NoLoans
  },

  setup () {
    const { getters, state } = useStore()
    const hasLoans = computed(() => state.loans.length)
    const loanSets = computed(() => getters.loanSets)
    const { createNewLoan } = useCalculator()

    return {
      createNewLoan,
      hasLoans,
      loanSets
    }
  }
})
</script>
