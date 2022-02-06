import { computed, ComputedRef, readonly, ref, Ref } from 'vue'
import { useStore } from 'vuex'
import { ILoanData } from '@/entities'

interface IUseCalculator {
  loan: ComputedRef<ILoanData>
  loading: Readonly<Ref<boolean>>
  saveLoan: () => void
}

export default function useCalculator (): IUseCalculator {
  const { state, dispatch } = useStore()
  const formData = computed(() => JSON.parse(JSON.stringify(state.formData)))
  const loading = ref(false)
  const loan = ref(formData)

  const saveLoan = async () => {
    try {
      loading.value = true
      await dispatch('createLoan', loan)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return {
    saveLoan,
    loading: readonly(loading),
    loan
  }
}
