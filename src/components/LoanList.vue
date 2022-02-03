<template>
  <Card>
    <RT>
      <template #thead>
        <RHCPinned class="w-1/4 text-left">
          Lender
        </RHCPinned>
        <RHC class="w-42">
          Margin
        </RHC>
        <RHC class="w-42">
          Loan Period <span class="block text-xs">in months</span>
        </RHC>
        <RHC class="text-right">
          Total Interest
        </RHC>
      </template>
      <template #tbody>
        <tr
          v-for="(loan, index) in loans"
          :key="loan.id"
          :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
        >
          <RBCPinned :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'">
            <BaseLink :to="`/loan/${loan.id}`">
              {{ loan.lender }}
            </BaseLink>
          </RBCPinned>
          <RBC class="text-center">
            {{ loan.margin }}%
          </RBC>
          <RBC class="text-center">
            {{ loan.period }}
          </RBC>
          <RBC class="text-right">
            {{ loan.interest.currency }}{{ loan.interest.amount }}
          </RBC>
        </tr>
      </template>
    </RT>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BaseLink from '@/components/BaseLink.vue'
import Card from '@/components/Card.vue'
import RT from '@/components/ResponsiveTable.vue'
import RBC from '@/components/ResponsiveBodyCell.vue'
import RBCPinned from '@/components/ResponsiveBodyCellPinned.vue'
import RHC from '@/components/ResponsiveHeadCell.vue'
import RHCPinned from '@/components/ResponsiveHeadCellPinned.vue'

export default defineComponent({
  components: {
    BaseLink,
    Card,
    RT,
    RBC,
    RBCPinned,
    RHC,
    RHCPinned
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
