<template>
  <div class="grid gap-6">
    <LoanSetHeading />

    <LoanList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoanList from '@/components/LoanList.vue'
import LoanSetHeading from '@/components/LoanSetHeading.vue'

export default defineComponent({
  components: {
    LoanList,
    LoanSetHeading
  }
})
</script>
