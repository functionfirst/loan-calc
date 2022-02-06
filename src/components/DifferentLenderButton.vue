<template>
  <CalculateLoanModal
    v-slot="{ setIsOpen }"
    :loan="loan"
  >
    <SecondaryButton @click="setIsOpen(true)">
      <IconBank class="h-6 w-6" />
      Try a different Lender
    </SecondaryButton>
  </CalculateLoanModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculateLoanModal from '@/components/CalculateLoanModal.vue'
import IconBank from '@/components/IconBank.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'

export default defineComponent({
  components: {
    CalculateLoanModal,
    IconBank,
    SecondaryButton
  },

  props: {
    loan: {
      required: true,
      type: Object
    }
  }
})
</script>
