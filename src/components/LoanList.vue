<template>
  <div class="grid gap-6">
    <div class="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-sm shadow-sm">
      <div class="flex flex-1 w-full md:w-auto justify-between gap-6">
        <dl>
          <dt class="text-lg md:text-2xl">
            £10,000,000.00
          </dt>
          <dd class="text-xs md:text-sm text-gray-900">
            Loan Amount
          </dd>
        </dl>

        <dl>
          <dt class="text-lg md:text-2xl">
            0.25%
          </dt>
          <dd class="text-xs md:text-sm text-gray-900">
            Base Interest Rate
          </dd>
        </dl>
      </div>

      <DifferentLenderButton />
    </div>

    <div class="shadow-sm rounded-sm overflow-hidden bg-white">
      <ResponsiveTable>
        <template #thead>
          <ResponsiveTheadCell
            class="w-1/4 text-left"
            :pin="true"
          >
            Lender
          </ResponsiveTheadCell>
          <ResponsiveTheadCell class="w-42">
            Margin
          </ResponsiveTheadCell>
          <ResponsiveTheadCell class="w-42">
            Loan Period <span class="block text-xs">in months</span>
          </ResponsiveTheadCell>
          <ResponsiveTheadCell class="text-right">
            Total Interest
          </ResponsiveTheadCell>
        </template>
        <template #tbody>
          <tr
            v-for="(loan, index) in loans"
            :key="loan.id"
            :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
          >
            <ResponsiveTbodyCell
              :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100' "
              :pin="true"
            >
              <BaseLink :to="`/loan/1`">
                {{ loan.lender }}
              </BaseLink>
            </ResponsiveTbodyCell>
            <ResponsiveTbodyCell class="text-center">
              {{ loan.margin }}%
            </ResponsiveTbodyCell>
            <ResponsiveTbodyCell class="text-center">
              {{ loan.period }}
            </ResponsiveTbodyCell>
            <ResponsiveTbodyCell class="text-right">
              {{ loan.interest.currency }}
              {{ loan.interest.amount }}
            </ResponsiveTbodyCell>
          </tr>
        </template>
      </ResponsiveTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BaseLink from './BaseLink.vue'
import DifferentLenderButton from './DifferentLenderButton.vue'
import ResponsiveTable from '@/components/ResponsiveTable.vue'
import ResponsiveTbodyCell from '@/components/ResponsiveTbodyCell.vue'
import ResponsiveTheadCell from '@/components/ResponsiveTheadCell.vue'

export default defineComponent({
  components: {
    BaseLink,
    DifferentLenderButton,
    ResponsiveTable,
    ResponsiveTbodyCell,
    ResponsiveTheadCell
  },
  setup () {
    const loans = [
      {
        id: 1,
        lender: 'Unnamed',
        margin: 2.5,
        period: 60,
        interest: {
          amount: 137500000,
          currency: 'GBP'
        }
      },
      {
        id: 2,
        lender: 'Unnamed',
        margin: 3.2,
        period: 48,
        interest: {
          amount: 126800000,
          currency: 'GBP'
        }
      }
    ]

    return {
      loans
    }
  }
})
</script>
