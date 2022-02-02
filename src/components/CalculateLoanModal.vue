<template>
  <Modal>
    <h2>Calculate a commercial or personal loan.</h2>

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

import InputCurrency from './InputCurrency.vue'
import InputDate from './InputDate.vue'
import InputPercentage from './InputPercentage.vue'
import InputText from './InputText.vue'
import Modal from './Modal.vue'

export default defineComponent({
  components: {
    InputCurrency,
    InputDate,
    InputPercentage,
    InputText,
    Modal
  }
})
</script>
