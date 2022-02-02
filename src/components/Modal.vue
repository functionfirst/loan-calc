<template>
  <div class="modal">
    <slot />
  </div>
</template>

<style lang="scss">
.modal {
  display: none;
  position: absolute;
  z-index: 10;
  max-width: 27rem;
  background-color: #fff;
  padding: 2rem;
  box-shadow: #dedede 0 6px 12px 0;
}
</style>
