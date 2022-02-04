<template>
  <Heading tag="h2">
    Loan Details
  </Heading>

  <LoanSetHeading />

  <LoanList class="mt-6" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Heading from '@/components/Heading.vue'
import LoanList from '@/components/LoanList.vue'
import LoanSetHeading from '@/components/LoanSetHeading.vue'

export default defineComponent({
  components: {
    Heading,
    LoanList,
    LoanSetHeading
  }
})
</script>
