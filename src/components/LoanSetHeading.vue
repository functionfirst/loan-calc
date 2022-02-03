<template>
  <Card class="flex flex-col md:flex-row gap-6 items-center justify-between p-4 md:p-6">
    <div class="flex flex-1 w-full md:w-auto justify-between gap-6">
      <DescriptionList label="Loan Amount">
        £10,000,000.00
      </DescriptionList>

      <DescriptionList label="Base Interest Rate">
        0.25%
      </DescriptionList>
    </div>

    <DifferentLenderButton />
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import DescriptionList from '@/components/DescriptionList.vue'
import DifferentLenderButton from '@/components/DifferentLenderButton.vue'

export default defineComponent({
  components: {
    Card,
    DescriptionList,
    DifferentLenderButton
  }
})
</script>
