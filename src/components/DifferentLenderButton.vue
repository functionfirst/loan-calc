<template>
  <SecondaryButton @click="setIsOpen(true)">
    <IconBank class="h-6 w-6" />
    Try a different Lender
  </SecondaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useModal from '@/composables/useModal'
import IconBank from '@/components/IconBank.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'

export default defineComponent({
  components: {
    IconBank,
    SecondaryButton
  },

  setup () {
    const { setIsOpen } = useModal()

    return {
      setIsOpen
    }
  }
})
</script>
