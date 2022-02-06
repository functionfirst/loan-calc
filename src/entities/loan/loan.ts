import { IBreakdown, ILoan, ILoanData, IMoney } from '@/entities'
import { diffInMonths, diffInDays } from '@/libs/dates'
import { Breakdown } from '../breakdown'
import { dailyInterestPercentage } from '@/libs/finance'
import { Money } from '../money/money'
import { guidGenerator } from '@/libs/guid'

export class Loan implements ILoan {
  readonly id: string
  readonly loanAmount: IMoney
  readonly baseInterestRate: number | string
  readonly startDate: Date | string
  readonly endDate: Date | string
  readonly lender: string
  readonly margin: number | string
  readonly breakdown: IBreakdown[]
  readonly period: number

  constructor (data: ILoanData) {
    const validStartAndEndDate = diffInDays(data.endDate.toString(), data.startDate.toString()) >= 1

    if (!validStartAndEndDate) {
      throw new Error('Your End Date must be at least one day after your Start Date')
    }

    this.id = data.id ? data.id : guidGenerator()
    this.loanAmount = new Money(data.loanAmount)
    this.baseInterestRate = data.baseInterestRate
    this.startDate = data.startDate
    this.endDate = data.endDate
    this.lender = data.lender
    this.margin = data.margin
    this.breakdown = this.calculateBreakdown()
    this.period = diffInMonths(data.endDate.toString(), data.startDate.toString())
  }

  get dailyInterestPercentage (): number {
    return dailyInterestPercentage(+this.baseInterestRate)
  }

  get dailyInterest (): number {
    return this.loanAmount.amount * this.dailyInterestPercentage
  }

  get dailyInterestWithMargin (): number {
    return this.dailyInterest + (this.dailyInterest * (+this.margin / 100))
  }

  get loanPeriodInDays (): number {
    return diffInDays(this.endDate.toString(), this.startDate.toString())
  }

  get lastPayment (): IBreakdown {
    return this.breakdown[this.breakdown.length - 1]
  }

  get totalInterest (): IMoney {
    return this.lastPayment.interest
  }

  dayBreakdown (day: number): IBreakdown {
    const data = {
      interest: this.dailyInterest * day,
      withoutMargin: this.dailyInterest,
      withMargin: this.dailyInterestWithMargin
    }

    const dayBreakdown = new Breakdown(data, this.loanAmount.currency)

    return dayBreakdown
  }

  calculateBreakdown (): IBreakdown[] {
    // @todo improve performance by moving this calculation off the main thread using a web worker?
    const breakdown = []

    for (let i = 1; i <= this.loanPeriodInDays; i++) {
      const item = this.dayBreakdown(i)
      breakdown.push(item)
    }

    return breakdown
  }
}
