import { IBreakdown, IMoney } from '@/entities'

export interface ILoanData {
  readonly id?: number
  readonly amount: IMoney
  readonly baseInterestRate: number
  readonly startDate: Date | number
  readonly endDate: Date | number
  readonly lender: string
  readonly margin: IMoney
}

export interface ILoan extends ILoanData {
  // readonly breakdown: IBreakdown[]
  readonly totalInterest: IMoney
  readonly period: number
  readonly lastPayment: IBreakdown
}
