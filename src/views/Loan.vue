<template>
  <div class="flex flex-col relative max-h-screen p-4 md:p-6">
    <header>
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

    <HeadingWithMargin tag="h2">
      {{ lender }}
    </HeadingWithMargin>

    <Card class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-center p-4 md:p-6">
      <DescriptionList
        label="Loan Amount"
        class="col-span-2 md:col-span-1"
      >
        {{ loan.currency }}{{ loan.amount }}
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
        <SecondaryButton class="mx-auto md:mx-0 justify-center">
          <IconPencil class="h-6 w-6" />
          Edit Loan Details
        </SecondaryButton>
      </div>
    </Card>

    <HeadingWithMargin tag="h2">
      Breakdown of loan over its lifetime
    </HeadingWithMargin>

    <Card class="flex-1 overflow-hidden">
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

    <div class="z-10 sticky bottom-0 flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-6 px-4 md:px-6">
      <h3>Total Interest:</h3>

      <p class="font-bold">
        {{ totalInterest.currency }}{{ totalInterest.amount }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import BaseLink from '@/components/BaseLink.vue'
import Card from '@/components/Card.vue'
import DescriptionList from '@/components/DescriptionList.vue'
import Heading from '@/components/Heading.vue'
import HeadingWithMargin from '@/components/HeadingWithMargin.vue'
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
    HeadingWithMargin,
    IconPencil,
    SecondaryButton,
    RT,
    RBC,
    RBCPinned,
    RHC,
    RHCPinned
  },

  setup () {
    // @todo replace with dynamic fetch
    const loan = reactive({
      lender: 'Unnamed',
      loan: {
        amount: 1000000000,
        currency: 'GBP'
      },
      startDate: new Date().toDateString(),
      endDate: new Date().toDateString(),
      baseInterestRate: 0.25,
      margin: 3,
      periodInMonths: 60,
      totalInterest: {
        amount: 137500000,
        currency: 'GBP'
      },
      breakdown: [
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
    })

    return {
      ...toRefs(loan)
    }
  }
})
</script>
