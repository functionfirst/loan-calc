<template>
  <div class="p-4 md:p-6">
    <CurrentLoans v-if="hasLoans" />
    <NoLoans v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CurrentLoans from '@/components/CurrentLoans.vue'
import NoLoans from '@/components/NoLoans.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    CurrentLoans,
    NoLoans
  },

  setup () {
    const { state } = useStore()
    const hasLoans = state.loans.length

    return {
      hasLoans
    }
  }
})
</script>
