<template>
  <CalculateLoanModal
    v-slot="{ setIsOpen }"
    :loan="loan"
  >
    <PrimaryButton
      size="lg"
      @click="setIsOpen(true)"
    >
      <IconCirclePlus class="h-6 w-6" />
      Start a new loan calculation
    </PrimaryButton>
  </CalculateLoanModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculateLoanModal from '@/components/CalculateLoanModal.vue'
import IconCirclePlus from '@/components/IconCirclePlus.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
// import { ICurrency } from '@/entities'

const loan = {
  loanAmount: {
    amount: '',
    currency: ''
  },
  baseInterestRate: '',
  startDate: '',
  endDate: '',
  lender: '',
  margin: ''
}

export default defineComponent({
  components: {
    CalculateLoanModal,
    IconCirclePlus,
    PrimaryButton
  },

  setup () {
    return {
      loan
    }
  }
})
</script>
