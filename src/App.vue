<template>
  <div class="mx-auto max-w-5xl">
    <router-view />
  </div>

  <CalculateLoanModal />
  <SeedData />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculateLoanModal from '@/components/CalculateLoanModal.vue'
import SeedData from '@/components/SeedData.vue'

export default defineComponent({
  components: {
    CalculateLoanModal,
    SeedData
  }
})
</script>
