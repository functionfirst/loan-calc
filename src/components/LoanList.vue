<template>
  <div>
    <div>
      £10,000,000.00
      Loan Amount
    </div>

    <div>
      0.25%
      Loan Amount
    </div>

    <DifferentLenderButton />

    <table width="100%" cellspacing="0" cellpadding="0" border="0">
      <thead>
        <tr>
          <th align="left">Lender</th>
          <th>Margin</th>
          <th>Loan period <span>in months</span></th>
          <th align="right">Total Interest</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="left">
            <RouterLink :to="`/loan/1`">
              Unnamedx
            </RouterLink>
          </td>
          <td>2.5%</td>
          <td>60</td>
          <td align="right">£1,375,000.00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DifferentLenderButton from './DifferentLenderButton.vue'

export default defineComponent({
  components: {
    DifferentLenderButton
  }
})
</script>
