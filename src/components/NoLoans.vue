<template>
  <h1>
    No loans found
  </h1>

  [icon]

  <p>
    You have not created any commercial or personal loan calculations
  </p>

  <StartLoanButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StartLoanButton from './StartLoanButton.vue'

export default defineComponent({
  components: {
    StartLoanButton
  }
})
</script>

<style lang="scss">

</style>
