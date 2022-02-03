<template>
  <button
    class="flex items-center gap-2 border font-medium hover:shadow"
    :class="buttonCss.join(' ')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    size: {
      default: '',
      type: String
    }
  },

  setup (props) {
    const buttonCss: string[] = []

    switch (props.size) {
      case 'xl':
        buttonCss.push('py-4 px-6 rounded-md')
        break
      case 'lg':
        buttonCss.push('py-3 px-5 rounded-md')
        break
      default:
        buttonCss.push('py-2 px-4 rounded text-sm')
        break
    }

    return {
      buttonCss
    }
  }
})
</script>
