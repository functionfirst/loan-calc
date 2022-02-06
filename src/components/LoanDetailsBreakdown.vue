<template>
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
        class="hover:underline"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
      >
        <RBCPinned
          class="text-center"
          :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
        >
          {{ index + 1 }}
        </RBCPinned>
        <RBC class="text-right">
          {{ formatCurrency(day.interest.amount, day.interest.currency) }}
        </RBC>
        <RBC class="text-right">
          {{ formatCurrency(day.withoutMargin.amount, day.withoutMargin.currency) }}
        </RBC>
        <RBC class="text-right">
          {{ formatCurrency(day.withMargin.amount, day.withMargin.currency) }}
        </RBC>
      </tr>
    </template>
  </RT>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RT from '@/components/ResponsiveTable.vue'
import RBC from '@/components/ResponsiveBodyCell.vue'
import RBCPinned from '@/components/ResponsiveBodyCellPinned.vue'
import RHC from '@/components/ResponsiveHeadCell.vue'
import RHCPinned from '@/components/ResponsiveHeadCellPinned.vue'
import { formatCurrency } from '@/libs/formatCurrency'

export default defineComponent({
  components: {
    RT,
    RBC,
    RBCPinned,
    RHC,
    RHCPinned
  },

  props: {
    breakdown: {
      required: true,
      type: Array
    }
  },

  setup () {
    return {
      formatCurrency
    }
  }
})
</script>
