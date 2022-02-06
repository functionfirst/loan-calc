import { formatDate } from '@/libs/dates'
import { formatCurrency } from '@/libs/formatCurrency'
import { useStore } from '@/store'
import { computed, ComputedRef } from 'vue'

interface ILoan {
  baseInterestRate: ComputedRef<number>
  breakdown: ComputedRef<string>
  endDate: ComputedRef<string>
  startDate: ComputedRef<string>
  lender: ComputedRef<string>
  loanAmount: ComputedRef<string>
  margin: ComputedRef<number>
  totalInterest: ComputedRef<string>
  editLoan: () => void
}

export default function useLoan (id: string): ILoan | undefined {
  const { getters, dispatch } = useStore()
  const editLoan = () => dispatch('editLoan', id)
  const loan = computed(() => getters.loanById(id))
  const totalInterest = computed(() => formatCurrency(loan.value.totalInterest.amount, loan.value.totalInterest.currency))
  const loanAmount = computed(() => formatCurrency(loan.value.loanAmount.amount, loan.value.loanAmount.currency))
  const endDate = computed(() => formatDate(loan.value.endDate))
  const startDate = computed(() => formatDate(loan.value.startDate))
  const baseInterestRate = computed(() => +loan.value.baseInterestRate)
  const breakdown = computed(() => loan.value.breakdown)
  const lender = computed(() => loan.value.lender)
  const margin = computed(() => +loan.value.margin)

  return {
    baseInterestRate,
    breakdown,
    editLoan,
    endDate,
    startDate,
    lender,
    loanAmount,
    margin,
    totalInterest
  }
}
