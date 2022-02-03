<template>
  <Modal>
    <Heading tag="h2">
      Calculate a commercial or personal loan.
    </Heading>

    <label for="amount">Loan Amount</label>
    <InputCurrency id="amount" />

    <label for="startDate">Start Date</label>
    <InputDate id="startDate" />

    <label for="endDate">End Date</label>
    <InputDate id="endDate" />

    <label for="margin">Margin</label>
    <InputPercentage id="margin" />

    <label id="baseInterestRate">Base Interest Rate</label>
    <InputPercentage id="baseInterestRate" />

    <label id="lenderName">Lender Name <span>optional</span></label>
    <InputText id="lenderName" />

    <button>
      Calculate Loan
    </button>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Heading from '@/components/Heading.vue'
import InputCurrency from '@/components/InputCurrency.vue'
import InputDate from '@/components/InputDate.vue'
import InputPercentage from '@/components/InputPercentage.vue'
import InputText from '@/components/InputText.vue'
import Modal from '@/components/Modal.vue'

export default defineComponent({
  components: {
    Heading,
    InputCurrency,
    InputDate,
    InputPercentage,
    InputText,
    Modal
  }
})
</script>
