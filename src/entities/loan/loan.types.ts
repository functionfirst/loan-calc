import { IBreakdown, IMoney } from '@/entities'

export interface ILoanData {
  readonly id: string
  readonly loanAmount: IMoney
  readonly baseInterestRate: number | string
  readonly startDate: Date | string
  readonly endDate: Date | string
  readonly lender: string
  readonly margin: number | string
}

export interface ILoan extends ILoanData {
  readonly breakdown: IBreakdown[]
  readonly totalInterest: IMoney
  readonly period: number
  readonly lastPayment: IBreakdown
  calculateBreakdown(): IBreakdown[]
}
