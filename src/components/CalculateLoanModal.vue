<template>
  <Modal>
    <Heading
      tag="h2"
      class="text-center md:text-left mb-4"
    >
      Calculate a commercial or personal loan.
    </Heading>

    <form class="grid md:grid-cols-2 gap-6">
      <FormRow class="md:col-span-2">
        <BaseLabel for="amount">
          Loan Amount
        </BaseLabel>
        <InputCurrency
          id="amount"
          v-model="loan.amount"
          placeholder="Enter loan amount"
          required
        />
      </FormRow>

      <FormRow>
        <BaseLabel for="startDate">
          Start Date
        </BaseLabel>
        <InputDate
          id="startDate"
          v-model="loan.startDate"
          required
        />
      </FormRow>

      <FormRow>
        <BaseLabel for="endDate">
          End Date
        </BaseLabel>
        <InputDate
          id="endDate"
          v-model="loan.endDate"
          required
        />
      </FormRow>

      <FormRow>
        <BaseLabel for="margin">
          Margin
        </BaseLabel>
        <InputPercentage
          id="margin"
          v-model="loan.margin"
          placeholder="0.00"
          required
        />
      </FormRow>

      <FormRow>
        <BaseLabel for="baseInterestRate">
          Base Interest Rate
        </BaseLabel>
        <InputPercentage
          id="baseInterestRate"
          v-model="loan.baseInterestRate"
          placeholder="0.00"
          required
        />
      </FormRow>

      <FormRow class="md:col-span-2">
        <BaseLabel for="lenderName">
          Lender Name <span class="text-sm text-gray-900">optional</span>
        </BaseLabel>
        <InputText
          id="lenderName"
          v-model="loan.lender"
          placeholder="(optional)"
        />
      </FormRow>

      <PrimaryButton
        size="xl"
        class="w-full justify-center md:col-span-2"
      >
        Calculate Loan
      </PrimaryButton>
    </form>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import BaseLabel from '@/components/BaseLabel.vue'
import FormRow from '@/components/FormRow.vue'
import Heading from '@/components/Heading.vue'
import InputCurrency from '@/components/InputCurrency.vue'
import InputDate from '@/components/InputDate.vue'
import InputPercentage from '@/components/InputPercentage.vue'
import InputText from '@/components/InputText.vue'
import Modal from '@/components/Modal.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'

export default defineComponent({
  components: {
    BaseLabel,
    FormRow,
    Heading,
    InputCurrency,
    InputDate,
    InputPercentage,
    InputText,
    Modal,
    PrimaryButton
  },
  setup () {
    const loan = reactive({
      amount: 0,
      startDate: '',
      endDate: '',
      margin: 0,
      baseInterestRate: 0,
      lender: ''
    })

    return {
      loan
    }
  }
})
</script>
