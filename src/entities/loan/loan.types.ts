export type ICurrency = 'GBP' | 'USD'

export interface IMoney {
  readonly amount: number | string
  readonly currency: ICurrency
}

export interface IBreakdown {
  readonly interest: IMoney
  readonly withoutMargin: IMoney
  readonly withMargin: IMoney
}

export interface ILoanData {
  readonly id?: number
  readonly loanAmount: IMoney
  readonly baseInterestRate: number | string
  readonly startDate: Date | string
  readonly endDate: Date | string
  readonly lender: string
  readonly margin: number | string
}

export interface ILoan extends ILoanData {
  // readonly breakdown: IBreakdown[]
  readonly totalInterest: IMoney
  readonly period: number
  readonly lastPayment: IBreakdown
}
