<template>
  <DescriptionList
    label="Loan Amount"
    class="col-span-2 md:col-span-1"
  >
    {{ loanAmount }}
  </DescriptionList>

  <DescriptionList label="Margin">
    {{ margin }}%
  </DescriptionList>

  <DescriptionList label="Base Interest Rate">
    {{ baseInterestRate }}%
  </DescriptionList>

  <DescriptionList
    label="Start Date"
    size="md"
  >
    {{ startDate }}
  </DescriptionList>

  <DescriptionList
    label="End Date"
    size="md"
  >
    {{ endDate }}
  </DescriptionList>

  <div class="col-span-2 md:col-span-1">
    <SecondaryButton
      class="mx-auto md:mx-0 justify-center"
      @click="$emit('editLoan')"
    >
      <IconPencil class="h-6 w-6" />
      Edit Loan Details
    </SecondaryButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DescriptionList from '@/components/DescriptionList.vue'
import IconPencil from '@/components/IconPencil.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'

export default defineComponent({
  components: {
    DescriptionList,
    IconPencil,
    SecondaryButton
  },

  props: {
    baseInterestRate: {
      required: true,
      type: Number
    },

    endDate: {
      required: true,
      type: String
    },

    startDate: {
      required: true,
      type: String
    },

    loanAmount: {
      required: true,
      type: String
    },

    margin: {
      required: true,
      type: Number
    }
  },

  emits: ['editLoan']
})
</script>
