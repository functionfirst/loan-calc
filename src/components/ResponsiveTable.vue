<template>
  <div class="overflow-auto snap-both max-h-96 md:max-h-full">
    <table
      class="text-sm"
      width="100%"
      cellspacing="0"
      cellpadding="0"
    >
      <thead class="relative z-40">
        <tr>
          <slot name="thead" />
        </tr>
      </thead>
      <tbody class="z-10 relative">
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>
