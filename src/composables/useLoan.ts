import { formatDate } from '@/libs/dates'
import { formatCurrency } from '@/libs/formatCurrency'
import { useStore } from '@/store'
import { computed } from 'vue'
import { IUseLoan } from './useLoan.types'

export default function useLoan (id: string): IUseLoan | undefined {
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
