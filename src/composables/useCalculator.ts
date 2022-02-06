import { computed, ComputedRef, reactive, readonly, ref, Ref, watch } from 'vue'
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
  const loan = reactive(formData.value)

  watch(formData, () => {
    Object.assign(loan, formData.value)
  })

  const saveLoan = async () => {
    try {
      loading.value = true
      await dispatch('updateLoan', loan)
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
