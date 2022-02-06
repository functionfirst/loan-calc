import { ICurrency } from '@/entities'
import { guidGenerator } from '@/libs/guid'

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const loan1 = {
  id: guidGenerator(),
  loanAmount: {
    amount: getRandomInt(10000, 10000000),
    currency: 'GBP' as ICurrency
  },
  baseInterestRate: getRandomInt(1, 3),
  startDate: '02-12-2022',
  endDate: '03-12-2022',
  lender: 'HSBC',
  margin: getRandomInt(1, 10)
}
const loan2 = {
  id: guidGenerator(),
  loanAmount: {
    amount: getRandomInt(10000, 10000000),
    currency: 'GBP' as ICurrency
  },
  baseInterestRate: getRandomInt(1, 3),
  startDate: '02-12-2022',
  endDate: '03-12-2022',
  lender: 'Barclays',
  margin: getRandomInt(1, 10)
}
const loan3 = {
  id: guidGenerator(),
  loanAmount: {
    amount: getRandomInt(10000, 10000000),
    currency: 'GBP' as ICurrency
  },
  baseInterestRate: getRandomInt(1, 3),
  startDate: '02-12-2022',
  endDate: '03-12-2022',
  lender: 'Royal Bank of Scotland',
  margin: getRandomInt(1, 10)
}

export const loans = [loan1, loan2, loan3]
