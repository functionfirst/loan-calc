<template>
  <div>
    <slot v-bind="{ setIsOpen }" />
    <template v-if="isOpen">
      <teleport to="#portal-target">
        <div
          v-if="isOpen"
          class="fixed bg-white p-6 md:p-8 shadow-md max-w-md z-50 inset-x-0 top-0 md:top-8 m-auto max-h-screen overflow-auto"
        >
          <button
            class="h-12 w-12 flex items-center justify-center -mt-6 md:-mt-8 float-right -mr-6 md:-mr-8"
            @click="setIsOpen(false)"
          >
            <IconX class="h-6  w-6" />
          </button>

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
            <FormRow class="md:col-span-2">
              <BaseLabel for="loanAmount">
                Loan Amount
              </BaseLabel>

              <InputCurrency
                id="loanAmount"
                v-model:currency="loanAmount.currency"
                v-model:amount="loanAmount.amount"
                placeholder="Enter loan amount"
                required
              />
              {{ loanAmount }}
            </FormRow>

            <FormRow>
              <BaseLabel for="startDate">
                Start Date
              </BaseLabel>
              <InputDate
                id="startDate"
                v-model="startDate"
                required
              />
            </FormRow>

            <FormRow>
              <BaseLabel for="endDate">
                End Date
              </BaseLabel>
              <InputDate
                id="endDate"
                v-model="endDate"
                required
              />
              {{ endDate }}
            </FormRow>

            <FormRow>
              <BaseLabel for="margin">
                Margin
              </BaseLabel>
              <InputPercentage
                id="margin"
                v-model="margin"
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
                v-model="baseInterestRate"
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
                v-model="lender"
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
        </div>

        <div
          v-show="isOpen"
          class="bg-black cursor-pointer fixed inset-0 z-40 bg-opacity-75"
          @click="setIsOpen(false)"
        />
      </teleport>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref, watch } from 'vue'
import useCalculator from '@/composables/useCalculator'
import BaseLabel from '@/components/BaseLabel.vue'
import FormRow from '@/components/FormRow.vue'
import Heading from '@/components/Heading.vue'
import IconX from '@/components/IconX.vue'
import InputCurrency from '@/components/InputCurrency.vue'
import InputDate from '@/components/InputDate.vue'
import InputPercentage from '@/components/InputPercentage.vue'
import InputText from '@/components/InputText.vue'
import Loading from '@/components/Loading.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { ILoanData } from '@/entities'

export default defineComponent({
  components: {
    BaseLabel,
    FormRow,
    Heading,
    IconX,
    InputCurrency,
    InputDate,
    InputPercentage,
    InputText,
    Loading,
    PrimaryButton
  },

  props: {
    loan: {
      required: true,
      type: Object as PropType<ILoanData>
    }
  },

  setup (props) {
    const { saveLoan, setLoan, loading, ...loan } = useCalculator()
    const isOpen = ref(false)
    const setIsOpen = (value: boolean) => {
      isOpen.value = value
    }

    const submit = async () => {
      await saveLoan()
      setIsOpen(false)
    }

    watch(isOpen, (open) => {
      if (!open) { return }
      setLoan(props.loan)
    })

    return {
      isOpen,
      setIsOpen,
      submit,
      loading,
      ...loan
    }
  }
})
</script>
