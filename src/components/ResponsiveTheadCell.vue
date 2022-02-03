<template>
  <th
    class="whitespace-nowrap bg-gray-50 border-b border-gray-300 snap-start sticky top-0 font-medium py-2 px-4"
    :class="css.join(' ')"
  >
    <slot />
  </th>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    pin: {
      default: false,
      type: Boolean
    }
  },

  setup (props) {
    const css = []

    if (props.pin) {
      css.push('left-0')
    }

    return {
      css
    }
  }
})
</script>
