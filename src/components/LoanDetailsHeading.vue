<template>
  <header class="mb-6">
    <BaseHeading>
      <template v-if="lender">
        {{ lender }} -
      </template>
      Loan Details
    </BaseHeading>

    <BaseLink
      to="/"
      class="text-sm"
    >
      &larr; Back to Loan Calculations
    </BaseLink>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from '@/components/BaseLink.vue'
import BaseHeading from '@/components/BaseHeading.vue'

export default defineComponent({
  components: {
    BaseLink,
    BaseHeading
  },

  props: {
    lender: {
      default: '',
      type: String
    }
  }
})
</script>
