import { ComputedRef } from 'vue'

export interface IUseLoan {
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
