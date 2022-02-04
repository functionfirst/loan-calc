<template>
  <div>
    <CurrentLoans v-if="loans.length" />
    <NoLoans v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CurrentLoans from '@/components/CurrentLoans.vue'
import NoLoans from '@/components/NoLoans.vue'

export default defineComponent({
  components: {
    CurrentLoans,
    NoLoans
  },

  setup () {
    const loans: string[] = ['replace this']

    return {
      loans
    }
  }
})
</script>
