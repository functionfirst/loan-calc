<template>
  <HeadingWithMargin tag="h2">
    Loan Details
  </HeadingWithMargin>

  <LoanSetHeading />

  <LoanList class="mt-6" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeadingWithMargin from '@/components/HeadingWithMargin.vue'
import LoanList from '@/components/LoanList.vue'
import LoanSetHeading from '@/components/LoanSetHeading.vue'

export default defineComponent({
  components: {
    HeadingWithMargin,
    LoanList,
    LoanSetHeading
  }
})
</script>
