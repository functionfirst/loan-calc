<template>
  <Card class="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-between p-4 md:p-6">
    <DescriptionList label="Loan Amount">
      £10,000,000.00
    </DescriptionList>

    <DescriptionList label="Base Interest Rate">
      0.25%
    </DescriptionList>

    <DifferentLenderButton class="col-span-2 md:col-span-1 mx-auto" />
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
