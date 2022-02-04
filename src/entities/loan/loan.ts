import { IBreakdown, ILoan, ILoanData, IMoney, Money } from '@/entities'
import { differenceInMonths } from 'date-fns'
// import { Breakdown } from '../breakdown'

export class Loan implements ILoan {
  readonly id?: number
  readonly amount: IMoney
  readonly baseInterestRate: number
  readonly startDate: Date | number
  readonly endDate: Date | number
  readonly lender: string
  readonly margin: IMoney

  constructor (data: ILoanData) {
    if (data.id) {
      this.id = data.id
    }

    this.amount = data.amount
    this.baseInterestRate = data.baseInterestRate
    this.startDate = data.startDate
    this.endDate = data.endDate
    this.lender = data.lender
    this.margin = data.margin
  }

  // get breakdown (): IBreakdown[] {
  //   // @todo calculate this
  //   return breakdown
  // }

  get lastPayment (): IBreakdown {
    return this.breakdown[this.breakdown.length - 1]
  }

  get totalInterest (): IMoney {
    return this.lastPayment.withMargin
  }

  get period (): number {
    return differenceInMonths(this.startDate, this.endDate)
  }
}
