<template>
  <transition
    enter-active-class="transition-all transform transition-fastest ease-out-quad"
    leave-active-class="transition-all transform transition-fastest ease-in-quad"
    enter-from-class="opacity-0 -translate-y-12"
    enter-to-class="opacity-100 -translate-y-0"
    leave-from-class="opacity-100 -translate-y-0"
    leave-to-class="opacity-0 -translate-y-12"
  >
    <div
      v-show="isOpen"
      class="fixed bg-white p-6 md:p-8 shadow-md max-w-md z-50 inset-x-0 top-0 md:top-8 m-auto max-h-screen overflow-auto"
    >
      <button
        class="h-12 w-12 flex items-center justify-center -mt-6 md:-mt-8 float-right -mr-6 md:-mr-8"
        @click="$emit('close')"
      >
        <IconX class="h-6  w-6" />
      </button>

      <slot />
    </div>
  </transition>

  <transition
    enter-active-class="transition-opacity transition-fastest ease-out-quad"
    leave-active-class="transition-opacity transition-fastest ease-in-quad"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isOpen"
      class="bg-black cursor-pointer fixed inset-0 z-40 bg-opacity-75"
      @click="$emit('close')"
    />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconX from '@/components/IconX.vue'

export default defineComponent({
  components: {
    IconX
  },

  props: {
    isOpen: {
      default: false,
      type: Boolean
    }
  },

  emits: ['close']
})
</script>
