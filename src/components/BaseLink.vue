<template>
  <RouterLink
    :to="$attrs.to"
    class="text-primary-100 hover:text-primary-200 font-medium"
  >
    <slot />
  </RouterLink>
</template>
