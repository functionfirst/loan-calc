<template>
  <td
    class="snap-start py-2 px-4"
    :class="css.join(' ')"
  >
    <slot />
  </td>
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
      css.push('sticky left-0')
    }

    return {
      css
    }
  }
})
</script>
