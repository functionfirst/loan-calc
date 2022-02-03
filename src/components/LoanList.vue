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
      <div class="overflow-auto snap-both max-h-96 md:max-h-full">
        <table
          class="text-sm"
          width="100%"
          cellspacing="0"
          cellpadding="0"
        >
          <thead class="relative z-40">
            <tr>
              <th class="whitespace-nowrap bg-gray-50 border-b  border-gray-300 snap-start sticky top-0 left-0 z-50 font-medium py-2 px-4 text-left w-1/4">
                Lender
              </th>
              <th class="whitespace-nowrap bg-gray-50 border-b border-gray-300 snap-start sticky top-0 font-medium py-2 px-4 w-42">
                Margin
              </th>
              <th class="whitespace-nowrap bg-gray-50 border-b border-gray-300 snap-start sticky top-0 font-medium py-2 px-4 w-42">
                Loan Period <span class="block text-xs">in months</span>
              </th>
              <th class="whitespace-nowrap bg-gray-50 border-b border-gray-300 snap-start sticky top-0 font-medium py-2 px-4 text-right">
                Total Interest
              </th>
            </tr>
          </thead>
          <tbody class="z-10 relative">
            <tr class="bg-white">
              <th class="snap-start sticky left-0 py-2 px-4 bg-white">
                <BaseLink :to="`/loan/1`">
                  Unnamed
                </BaseLink>
              </th>
              <td class="snap-start py-2 px-4 text-center">
                2.5%
              </td>
              <td class="snap-start py-2 px-4 text-center">
                60
              </td>
              <td class="snap-start py-2 px-4 text-right">
                £1,375,000.00
              </td>
            </tr>
            <tr class="bg-gray-50">
              <th class="snap-start sticky left-0 py-2 px-4 bg-gray-50">
                <BaseLink :to="`/loan/1`">
                  Unnamed
                </BaseLink>
              </th>
              <td class="snap-start py-2 px-4 text-center">
                2.5%
              </td>
              <td class="snap-start py-2 px-4 text-center">
                60
              </td>
              <td class="snap-start py-2 px-4 text-right">
                £1,375,000.00
              </td>
            </tr>
            <tr class="bg-white">
              <th class="snap-start sticky left-0 py-2 px-4 bg-white">
                <BaseLink :to="`/loan/1`">
                  Unnamed
                </BaseLink>
              </th>
              <td class="snap-start py-2 px-4 text-center">
                2.5%
              </td>
              <td class="snap-start py-2 px-4 text-center">
                60
              </td>
              <td class="snap-start py-2 px-4 text-right">
                £1,375,000.00
              </td>
            </tr>
            <tr class="bg-gray-50">
              <th class="snap-start sticky left-0 py-2 px-4 bg-gray-50">
                <BaseLink :to="`/loan/1`">
                  Unnamed
                </BaseLink>
              </th>
              <td class="snap-start py-2 px-4 text-center">
                2.5%
              </td>
              <td class="snap-start py-2 px-4 text-center">
                60
              </td>
              <td class="snap-start py-2 px-4 text-right">
                £1,375,000.00
              </td>
            </tr>
            <tr>
              <th class="snap-start sticky left-0 py-2 px-4 bg-white">
                <BaseLink :to="`/loan/1`">
                  Unnamed
                </BaseLink>
              </th>
              <td class="snap-start py-2 px-4 text-center">
                2.5%
              </td>
              <td class="snap-start py-2 px-4 text-center">
                60
              </td>
              <td class="snap-start py-2 px-4 text-right">
                £1,375,000.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BaseLink from './BaseLink.vue'
import DifferentLenderButton from './DifferentLenderButton.vue'

export default defineComponent({
  components: {
    BaseLink,
    DifferentLenderButton
  }
})
</script>
