<template>
  <header class="flex flex-col md:flex-row gap-2 items-center md:items-start justify-between mb-6">
    <Heading class="text-center md:text-left">
      Your Loan Calculations
    </Heading>

    <StartLoanButton />
  </header>

  <LoanSet
    v-for="(set, index) in loanSets"
    :key="index"
    v-bind="set"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Heading from '@/components/Heading.vue'
import LoanSet from '@/components/LoanSet.vue'
import StartLoanButton from '@/components/StartLoanButton.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    Heading,
    LoanSet,
    StartLoanButton
  },
  setup () {
    const { getters } = useStore()
    const loanSets = computed(() => getters.loanSets)

    return {
      loanSets
    }
  }
})
</script>
