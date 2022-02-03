<template>
  <header class="mb-6">
    <Heading>
      Loan Details
    </Heading>

    <BaseLink
      to="/"
      class="text-sm"
    >
      &larr; Back to Loan Calculations
    </BaseLink>
  </header>

  <Card class="grid grid-cols-2 md:grid-cols-3 gap-6 items-center p-4 md:p-6">
    <DescriptionList
      label="Loan Amount"
      class="col-span-2 md:col-span-1"
    >
      £10,000,000.00
    </DescriptionList>

    <DescriptionList label="Margin">
      3%
    </DescriptionList>

    <DescriptionList label="Base Interest Rate">
      0.5%
    </DescriptionList>

    <DescriptionList
      label="Start Date"
      size="md"
    >
      12th Dec 2021
    </DescriptionList>

    <DescriptionList
      label="End Date"
      size="md"
    >
      12th Dec 2022
    </DescriptionList>

    <div class="col-span-2 md:col-span-1">
      <SecondaryButton class="mx-auto md:mx-0 justify-center">
        <IconPencil class="h-6 w-6" />
        Edit Loan Details
      </SecondaryButton>
    </div>
  </Card>

  <Heading
    tag="h2"
    class="mt-6 mb-4"
  >
    Breakdown of loan over its lifetime
  </Heading>

  <Card>
    <RT class="text-right">
      <template #thead>
        <RHCPinned class="text-center w-32 whitespace-pre-line">
          Elapsed Days
        </RHCPinned>
        <RHC class="whitespace-pre-line text-right">
          Interest Accrual
        </RHC>
        <RHC class="text-right">
          Daily Interest <span class="block text-xs">without margin</span>
        </RHC>
        <RHC class="text-right">
          Daily Interest <span class="block text-xs">with margin</span>
        </RHC>
      </template>
      <template #tbody>
        <tr
          v-for="(day, index) in breakdown"
          :key="index"
          :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
        >
          <RBCPinned
            class="text-center"
            :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
          >
            {{ index + 1 }}
          </RBCPinned>
          <RBC class="text-right">
            {{ day.interest.currency }}{{ day.interest.amount }}
          </RBC>
          <RBC class="text-right">
            {{ day.withoutMargin.currency }}{{ day.withoutMargin.amount }}
          </RBC>
          <RBC class="text-right">
            {{ day.withMargin.currency }}{{ day.withMargin.amount }}
          </RBC>
        </tr>
      </template>
    </RT>
  </Card>

  <div class="flex items-center justify-between md:justify-end gap-6 p-4 md:p-6">
    <h3>Total Interest:</h3>

    <p class="font-bold">
      {{ totalInterest.currency }}{{ totalInterest.amount }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from '@/components/BaseLink.vue'
import Card from '@/components/Card.vue'
import DescriptionList from '@/components/DescriptionList.vue'
import Heading from '@/components/Heading.vue'
import IconPencil from '@/components/IconPencil.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import RT from '@/components/ResponsiveTable.vue'
import RBC from '@/components/ResponsiveBodyCell.vue'
import RBCPinned from '@/components/ResponsiveBodyCellPinned.vue'
import RHC from '@/components/ResponsiveHeadCell.vue'
import RHCPinned from '@/components/ResponsiveHeadCellPinned.vue'

export default defineComponent({
  components: {
    BaseLink,
    Card,
    DescriptionList,
    Heading,
    IconPencil,
    SecondaryButton,
    RT,
    RBC,
    RBCPinned,
    RHC,
    RHCPinned
  },
  setup () {
    const breakdown = [
      {
        interest: {
          amount: 30000,
          currency: 'GBP'
        },
        withoutMargin: {
          amount: 15000,
          currency: 'GBP'
        },
        withMargin: {
          amount: 30000,
          currency: 'GBP'
        }
      },
      {
        interest: {
          amount: 60000,
          currency: 'GBP'
        },
        withoutMargin: {
          amount: 15000,
          currency: 'GBP'
        },
        withMargin: {
          amount: 15000,
          currency: 'GBP'
        }
      }
    ]

    const totalInterest = {
      amount: 137500000,
      currency: 'GBP'
    }

    return {
      breakdown,
      totalInterest
    }
  }
})
</script>
