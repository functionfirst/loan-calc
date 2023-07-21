<template>
  <component
    :is="tag"
    :class="tagCss.join(' ')"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type IHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export default defineComponent({
  props: {
    tag: {
      default: 'h1',
      type: String as PropType<IHeading>,
      validator: (tag: IHeading) => {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag.toLowerCase())
      }
    }
  },

  setup (props) {
    const tagCss = []

    switch (props.tag) {
      case 'h2':
        tagCss.push('font-bold')
        break
      default:
        tagCss.push('text-2xl', 'font-medium')
        break
    }

    return {
      tagCss
    }
  }
})
</script>
