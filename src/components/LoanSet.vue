<template>
  <div>
    <HeadingWithMargin tag="h2">
      Loan Details
    </HeadingWithMargin>

    <LoanSetHeading v-bind="{ loanAmount, baseInterestRate }" />

    <LoanList
      class="mt-6"
      :loans="loans"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeadingWithMargin from '@/components/HeadingWithMargin.vue'
import LoanList from '@/components/LoanList.vue'
import LoanSetHeading from '@/components/LoanSetHeading.vue'

export default defineComponent({
  components: {
    HeadingWithMargin,
    LoanList,
    LoanSetHeading
  },

  props: {
    loanAmount: {
      required: true,
      type: Object
    },

    baseInterestRate: {
      required: true,
      type: Number
    },

    loans: {
      required: true,
      type: Array
    }
  }
})
</script>
