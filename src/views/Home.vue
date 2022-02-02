<template>
  <CalculateLoanModal />
  <NoLoans />

  <CurrentLoans />
</template>

<script>
import CalculateLoanModal from '@/components/CalculateLoanModal'
import CurrentLoans from '@/components/CurrentLoans.vue'
import NoLoans from '@/components/NoLoans.vue'

export default {
  name: 'Home',
  components: {
    CalculateLoanModal,
    CurrentLoans,
    NoLoans
  }
}
</script>
