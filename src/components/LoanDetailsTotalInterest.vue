<template>
  <div class="z-10 sticky bottom-0 flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-6 px-4 md:px-6">
    <h3>Total Interest:</h3>

    <p class="font-bold">
      {{ totalInterest }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    totalInterest: {
      required: true,
      type: String
    }
  }
})
</script>
