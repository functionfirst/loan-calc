<template>
  <PrimaryButton size="lg">
    <IconCirclePlus class="h-6 w-6" />
    Start a new loan calculation
  </PrimaryButton>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const IconCirclePlus = defineAsyncComponent(() => import('@/components/IconCirclePlus.vue'))
const PrimaryButton = defineAsyncComponent(() => import('@/components/PrimaryButton.vue'))
</script>
