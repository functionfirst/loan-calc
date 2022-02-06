<template>
  <select class="text-sm px-3">
    <option value="">
      Select
    </option>
    <option
      v-for="(locale, index) in localeKeys"
      :key="index"
      :value="locale"
    >
      {{ locale }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { localeKeys } from '@/libs/locales'

export default defineComponent({
  setup () {
    return {
      localeKeys
    }
  }
})
</script>
