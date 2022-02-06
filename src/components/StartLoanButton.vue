<template>
  <PrimaryButton
    size="lg"
    @click="newLoan"
  >
    <IconCirclePlus class="h-6 w-6" />
    Start a new loan calculation
  </PrimaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconCirclePlus from '@/components/IconCirclePlus.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    IconCirclePlus,
    PrimaryButton
  },

  setup () {
    const { dispatch } = useStore()
    const newLoan = () => dispatch('newLoan')

    return {
      newLoan
    }
  }
})
</script>
