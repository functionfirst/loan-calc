<template>
  <PrimaryButton
    size="lg"
    @click="setIsOpen(true)"
  >
    <IconCirclePlus class="h-6 w-6" />
    Start a new loan calculation
  </PrimaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useModal from '@/composables/useModal'
import IconCirclePlus from '@/components/IconCirclePlus.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'

export default defineComponent({
  components: {
    IconCirclePlus,
    PrimaryButton
  },

  setup () {
    const { setIsOpen } = useModal()

    return {
      setIsOpen
    }
  }
})
</script>
