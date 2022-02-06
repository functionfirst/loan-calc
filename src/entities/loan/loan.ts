import { IBreakdown, ILoan, ILoanData, IMoney } from '@/entities'
import { differenceInMonths } from 'date-fns'

export class Loan implements ILoan {
  readonly id?: number
  readonly loanAmount: IMoney
  readonly baseInterestRate: number | string
  readonly startDate: Date | string
  readonly endDate: Date | string
  readonly lender: string
  readonly margin: number | string

  constructor (data: ILoanData) {
    if (data.id) {
      this.id = data.id
    }

    this.loanAmount = data.loanAmount
    this.baseInterestRate = data.baseInterestRate
    this.startDate = data.startDate
    this.endDate = data.endDate
    this.lender = data.lender
    this.margin = data.margin
  }

  get breakdown (): IBreakdown[] {
    // @todo calculate this correctly
    const interest = { amount: 0, currency: 'GBP' }
    const withMargin = { amount: 0, currency: 'GBP' }
    const withoutMargin = { amount: 0, currency: 'GBP' }
    const breakd = { interest, withMargin, withoutMargin } as IBreakdown
    const breakdown = [breakd]
    return breakdown
  }

  get lastPayment (): IBreakdown {
    return this.breakdown[this.breakdown.length - 1]
  }

  get totalInterest (): IMoney {
    return this.lastPayment.withMargin
  }

  get period (): number {
    const startDate = new Date(this.startDate)
    const endDate = new Date(this.endDate)
    return differenceInMonths(startDate, endDate)
  }
}
