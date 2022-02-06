import { ICurrency, ILoanData, IMoney } from '@/entities'
import { reactive, readonly, ref, Ref, toRefs } from 'vue'
import { useStore } from 'vuex'

type SaveLoanFunction = () => void
type SetLoanFunction = (state: ILoanData|undefined) => void

interface IUseCalculator {
  loanAmount: Ref<IMoney>
  startDate: Ref<Date|string>
  endDate: Ref<Date|string>
  margin: Ref<string|number>
  baseInterestRate: Ref<string|number>
  lender: Ref<string>
  loading: Readonly<Ref<boolean>>
  setLoan: SetLoanFunction
  saveLoan: SaveLoanFunction
}

const initialState = reactive({
  loanAmount: {
    amount: '',
    currency: 'GBP' as ICurrency
  },
  baseInterestRate: '',
  startDate: '',
  endDate: '',
  lender: '',
  margin: ''
})

export default function useCalculator (): IUseCalculator {
  const store = useStore()
  const loading = ref(false)
  const loan = reactive(initialState)

  const setLoan = (state: ILoanData|undefined) => {
    if (!open) { return }
    const newState = state ?? initialState
    Object.assign(loan, { ...newState })
  }

  const saveLoan = async () => {
    try {
      loading.value = true
      await store.dispatch('createLoan', loan)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return {
    setLoan,
    saveLoan,
    loading: readonly(loading),
    ...toRefs(loan)
  }
}
