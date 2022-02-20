<template>
  <Card class="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-between p-4 md:p-6">
    <DescriptionList label="Loan Amount">
      {{ formatCurrency(loanAmount.amount, loanAmount.currency) }}
    </DescriptionList>

    <DescriptionList
      label="Base Interest Rate"
      class="md:mx-auto"
    >
      {{ baseInterestRate }}%
    </DescriptionList>

    <DifferentLenderButton
      class="col-span-2 md:col-span-1 mx-auto md:mr-0"
      @click="$emit('differentLender')"
    />
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatCurrency } from '@/libs/formatCurrency'
import Card from '@/components/Card.vue'
import DescriptionList from '@/components/DescriptionList.vue'
import DifferentLenderButton from '@/components/DifferentLenderButton.vue'

export default defineComponent({
  components: {
    Card,
    DescriptionList,
    DifferentLenderButton
  },

  props: {
    loanAmount: {
      required: true,
      type: Object
    },

    baseInterestRate: {
      required: true,
      type: [String, Number]
    }
  },

  emits: ['differentLender'],

  setup () {
    return {
      formatCurrency
    }
  }
})
</script>
