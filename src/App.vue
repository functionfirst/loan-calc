<template>
  <div class="mx-auto max-w-5xl">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>

    <CalculateLoanModal />
  </div>
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
