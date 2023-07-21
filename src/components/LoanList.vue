<template>
  <BaseCard>
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
            {{ formatCurrency(loan.totalInterest.amount, loan.totalInterest.currency) }}
          </RBC>
        </tr>
      </template>
    </RT>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from '@/components/BaseLink.vue'
import BaseCard from '@/components/BaseCard.vue'
import RT from '@/components/ResponsiveTable.vue'
import RBC from '@/components/ResponsiveBodyCell.vue'
import RBCPinned from '@/components/ResponsiveBodyCellPinned.vue'
import RHC from '@/components/ResponsiveHeadCell.vue'
import RHCPinned from '@/components/ResponsiveHeadCellPinned.vue'
import { formatCurrency } from '@/libs/formatCurrency'

export default defineComponent({
  components: {
    BaseLink,
    BaseCard,
    RT,
    RBC,
    RBCPinned,
    RHC,
    RHCPinned
  },

  props: {
    loans: {
      required: true,
      type: Array
    }
  },

  setup() {
    return {
      formatCurrency
    }
  }
})
</script>
