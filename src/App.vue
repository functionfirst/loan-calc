<template>
  <div class="mx-auto max-w-5xl">
    <router-view />
  </div>

  <CalculateLoanModal />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculateLoanModal from '@/components/CalculateLoanModal.vue'

export default defineComponent({
  components: {
    CalculateLoanModal
  }
})
</script>
