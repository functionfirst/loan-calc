<template>
  <dl>
    <dt :class="css">
      <slot />
    </dt>
    <dd
      v-if="label"
      class="text-xs md:text-sm text-gray-900"
    >
      {{ label }}
    </dd>
  </dl>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type ISize = 'lg' | 'md'

export default defineComponent({
  props: {
    label: {
      default: '',
      type: String
    },

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
