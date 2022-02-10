<template>
  <SecondaryButton @click="createNewLoan(props)">
    <IconBank class="h-6 w-6" />
    Try a different Lender
  </SecondaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBank from '@/components/IconBank.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import useCalculator from '@/composables/useCalculator'

export default defineComponent({
  components: {
    IconBank,
    SecondaryButton
  },

  props: {
    baseInterestRate: {
      required: true,
      type: [String, Number]
    },

    loanAmount: {
      required: true,
      type: Object
    }
  },

  setup (props) {
    const { createNewLoan } = useCalculator()

    return {
      props,
      createNewLoan
    }
  }
})
</script>
