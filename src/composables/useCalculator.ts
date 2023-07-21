import { reactive, readonly, ref } from 'vue'
import { useStore } from 'vuex'
import type { ICurrency, ILoanData } from '@/entities'
import type { IUseCalculator } from './useCalculator.types'
import { Money } from '@/entities/money/money'
import useModal from './useModal'

const initialLoanState = {
  id: '',
  loanAmount: new Money({
    amount: 0,
    currency: 'GBP' as ICurrency
  }),
  baseInterestRate: '',
  startDate: '',
  endDate: '',
  lender: '',
  margin: ''
}

const loan = reactive({ ...initialLoanState })
const { isModalOpen, setIsModalOpen } = useModal()

export default function useCalculator(): IUseCalculator {
  const { dispatch, getters } = useStore()
  const loading = ref(false)

  const setState = (loan: ILoanData, initialLoanState: ILoanData) => {
    return (data?: ILoanData) => {
      const d = JSON.parse(JSON.stringify(data))
      Object.assign(loan, initialLoanState, d)
      setIsModalOpen(true)
    }
  }

  const setLoanState = setState(loan, initialLoanState)
  const createNewLoan = (data?: ILoanData) => setLoanState(data)
  const editLoan = (id: string) => setLoanState(getters.loanById(id))

  const saveLoan = async () => {
    loading.value = true
    const action = loan.id ? 'updateLoan' : 'createLoan'
    await dispatch(action, loan)
    setIsModalOpen(false)
    loading.value = false
  }

  return {
    isModalOpen,
    setIsModalOpen,
    editLoan,
    createNewLoan,
    saveLoan,
    loading: readonly(loading),
    loan
  }
}
