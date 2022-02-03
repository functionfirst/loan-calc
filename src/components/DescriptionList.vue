<template>
  <dl>
    <dt :class="css">
      <slot />
    </dt>
    <dd class="text-xs md:text-sm text-gray-900">
      {{ $attrs.label }}
    </dd>
  </dl>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type ISize = 'lg' | 'md'

export default defineComponent({
  props: {
    size: {
      default: 'lg',
      type: String as PropType<ISize>
    }
  },
  setup (props) {
    const size = {
      lg: 'text-lg md:text-2xl',
      md: 'text-sm md:text-md'
    }

    const css = size[props.size]

    return {
      css
    }
  }
})
</script>
