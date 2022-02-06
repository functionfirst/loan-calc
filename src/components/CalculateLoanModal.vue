<template>
  <Modal
    :is-open="isModalOpen"
    @close="setIsModalOpen(false)"
  >
    <Heading
      tag="h2"
      class="text-center md:text-left mb-4"
    >
      Calculate a commercial or personal loan.
    </Heading>

    <form
      class="grid md:grid-cols-2 gap-6"
      @submit.prevent="submit"
    >
      {{ loan }}
      <FormRow class="md:col-span-2">
        <BaseLabel for="loanAmount">
          Loan Amount
        </BaseLabel>

        <BaseInputCurrency
          id="loanAmount"
          v-model:currency="loan.loanAmount.currency"
          v-model:amount="loan.loanAmount.amount"
          placeholder="Enter loan amount"
          required
        />
        {{ loan.loanAmount }}
      </FormRow>

      <FormRow>
        <BaseLabel for="startDate">
          Start Date
        </BaseLabel>
        <BaseInput
          id="startDate"
          v-model="loan.startDate"
          type="date"
          required
        />
      </FormRow>

      <FormRow>
        <BaseLabel for="endDate">
          End Date
        </BaseLabel>
        <BaseInput
          id="endDate"
          v-model="loan.endDate"
          type="date"
          required
        />
        {{ loan.endDate }}
      </FormRow>

      <FormRow>
        <BaseLabel for="margin">
          Margin
        </BaseLabel>
        <BaseInputPercentage
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
        <BaseInputPercentage
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
        <BaseInput
          id="lenderName"
          v-model="loan.lender"
          placeholder="(optional)"
        />
      </FormRow>

      <PrimaryButton
        size="xl"
        class="w-full justify-center md:col-span-2"
        :disabled="loading"
      >
        <Loading :loading="loading">
          <template #loader>
            Calculating...
          </template>
          Calculate Loan
        </Loading>
      </PrimaryButton>
    </form>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseInputCurrency from '@/components/InputCurrency.vue'
import BaseInputPercentage from '@/components/InputPercentage.vue'
import BaseLabel from '@/components/BaseLabel.vue'
import FormRow from '@/components/FormRow.vue'
import Heading from '@/components/Heading.vue'
import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import useCalculator from '@/composables/useCalculator'
import useModal from '@/composables/useModal'

export default defineComponent({
  components: {
    BaseInputCurrency,
    BaseInputPercentage,
    BaseLabel,
    FormRow,
    Heading,
    BaseInput,
    Loading,
    Modal,
    PrimaryButton
  },

  setup () {
    const { isModalOpen, setIsModalOpen } = useModal()
    const { saveLoan, loading, loan } = useCalculator()

    const submit = async () => {
      await saveLoan()
      setIsModalOpen(false)
    }

    return {
      isModalOpen,
      setIsModalOpen,
      submit,
      loading,
      loan
    }
  }
})
</script>
