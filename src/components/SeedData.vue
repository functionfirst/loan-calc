<template>
  <div
    v-show="show"
    class="fixed bottom-4 right-4 bg-black px-8 py-6 grid gap-2 rounded-md shadow-lg z-50"
  >
    <p class="text-white text-sm">
      Start with some Seed Data?
    </p>

    <BaseButton
      class="text-center bg-white text-black justify-center hover:bg-gray-300"
      @click="seedData"
    >
      Add Seed Data
    </BaseButton>

    <BaseButton
      class="text-white justify-center hover:bg-gray-900"
      @click="resetData"
    >
      Reset Data
    </BaseButton>

    <BaseButton
      class="text-white justify-center hover:bg-gray-900"
      @click="show = false"
    >
      Hide Seeder
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import { useStore } from '@/store'
import { loans } from '@/data/seed'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    BaseButton
  },

  setup () {
    const router = useRouter()
    const { dispatch } = useStore()
    const show = ref(true)
    const resetData = () => {
      dispatch('resetLoans')
      router.push('/')
    }

    const seedData = async () => {
      for (let i = 0; i < loans.length; i++) {
        console.log(`Seeding data for ${loans[i].lender}`)
        await dispatch('createLoan', loans[i])
      }
    }

    return {
      show,
      resetData,
      seedData
    }
  }
})
</script>

function userRouter() {
  throw new Error('Function not implemented.')
}
