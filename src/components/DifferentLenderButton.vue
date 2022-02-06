<template>
  <SecondaryButton @click="differentLender">
    <IconBank class="h-6 w-6" />
    Try a different Lender
  </SecondaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBank from '@/components/IconBank.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    IconBank,
    SecondaryButton
  },

  props: {
    baseInterestRate: {
      required: true,
      type: Number
    },

    loanAmount: {
      required: true,
      type: Object
    }
  },

  setup (props) {
    const { dispatch } = useStore()
    const differentLender = () => dispatch('differentLender', props)

    return {
      differentLender
    }
  }
})
</script>
