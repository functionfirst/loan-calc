import { ICurrency, ILoanData, Loan } from '@/entities'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { IContext, IState, CREATE_LOAN } from './store.types'
// import groupBy from '@/libs/groupBy'

const debug = process.env.NODE_ENV !== 'production'

// @todo - move this into initial state loader maybe?
const state = {
  version: 1,
  loans: [{
    id: 1,
    lender: 'HSBC',
    loanAmount: {
      amount: 100000000,
      currency: 'GBP' as ICurrency
    },
    baseInterestRate: 0.25,
    startDate: '2022-02-12',
    endDate: '2022-09-12',
    margin: 3,
    totalInterest: {
      amount: 3000000,
      currency: 'GBP' as ICurrency
    },
    breakdown: [{
      interest: {
        amount: 300,
        currency: 'GBP' as ICurrency
      },
      withoutMargin: {
        amount: 300,
        currency: 'GBP' as ICurrency
      },
      withMargin: {
        amount: 300,
        currency: 'GBP' as ICurrency
      }
    }]
  }]
}

const actions = {
  createLoan ({ commit }: IContext, payload: ILoanData) {
    // @todo replace this with a serice call
    // const loan = this.$services.loans.create(payload)
    console.log({ payload })
    const loan = new Loan(payload)
    commit(CREATE_LOAN, loan)
  }
}

const getters = {
  loanSets: () => {
    // @todo construct a loan set dynamically
    // const grouped = groupBy(loans, loan => loan.lender)
    // const loans = state.loans.map(loan => new Loan(loan))

    const loanSet = [{
      loanAmount: {
        amount: 10000000,
        currency: 'GBP'
      },
      baseInterestRate: 0.25,
      loans: [{
        id: 1,
        loanAmount: {
          amount: 10000000,
          currency: 'GBP'
        },
        startDate: '2022-02-12',
        endDate: '2022-09-12',
        margin: '3',
        baseInterestRate: '0.25',
        lender: 'HSBC',
        period: 60,
        totalInterest: {
          amount: 1375000000,
          currency: 'GBP'
        }
      }]
    },
    {
      loanAmount: {
        amount: 10000000,
        currency: 'GBP'
      },
      baseInterestRate: 0.25,
      loans: [{
        id: 2,
        loanAmount: {
          amount: 10000000,
          currency: 'GBP'
        },
        startDate: '2022-02-12',
        endDate: '2022-09-12',
        margin: '3',
        baseInterestRate: '0.25',
        lender: 'HSBC',
        period: 60,
        totalInterest: {
          amount: 1375000000,
          currency: 'GBP'
        }
      }]
    }]

    return loanSet
  },

  loanById: (state: IState) => (id: number) => state.loans.find((loan) => loan.id === +id)
}

const mutations = {
  [CREATE_LOAN] (state: IState, loan: ILoanData) {
    state.loans.push(loan)
  }
}

export const store = createStore<IState>({
  state,
  actions,
  getters,
  mutations,

  strict: debug
})

export const useStore = (): Store<IState> => {
  return baseUseStore()
}
