<template>
  <header class="mb-6">
    <Heading>
      <template v-if="lender">
        {{ lender }} -
      </template>
      Loan Details
    </Heading>

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
import Heading from '@/components/Heading.vue'

export default defineComponent({
  components: {
    BaseLink,
    Heading
  },

  props: {
    lender: {
      default: '',
      type: String
    }
  }
})
</script>
