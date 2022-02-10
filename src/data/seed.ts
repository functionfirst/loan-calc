import { ICurrency, ILoanData, IMoney, Loan } from '@/entities'
import { guidGenerator } from '@/libs/guid'
import { Money } from '@/entities/money/money'

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const lenders = ['Barclays', 'RBS', 'HSBC', 'Monzo', 'Starling Bank']

class SeedData implements ILoanData {
  readonly id: string
  readonly loanAmount: IMoney
  readonly baseInterestRate: number | string
  readonly startDate: Date | string
  readonly endDate: Date | string
  readonly lender: string
  readonly margin: number | string

  constructor (amount: number) {
    this.id = guidGenerator()
    this.loanAmount = new Money({
      amount,
      currency: 'GBP'
    })
    this.baseInterestRate = getRandomInt(1, 3)
    this.startDate = '2022-01-01'
    this.endDate = '2023-01-01'
    this.lender = lenders[getRandomInt(0, 4)]
    this.margin = getRandomInt(1, 10)
  }
}

export const seedLoans = (): ILoanData[] => {
  const amount = getRandomInt(10000, 10000000)
  return [new SeedData(amount), new SeedData(amount), new SeedData(amount)]
}
