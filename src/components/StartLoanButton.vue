<template>
  <PrimaryButton
    size="lg"
    @click="createNewLoan"
  >
    <IconCirclePlus class="h-6 w-6" />
    Start a new loan calculation
  </PrimaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconCirclePlus from '@/components/IconCirclePlus.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import useCalculator from '@/composables/useCalculator'

export default defineComponent({
  components: {
    IconCirclePlus,
    PrimaryButton
  },

  setup () {
    const { createNewLoan } = useCalculator()

    return {
      createNewLoan
    }
  }
})
</script>
