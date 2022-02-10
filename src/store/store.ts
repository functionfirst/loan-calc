import { ILoan, ILoanData } from '@/entities'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { IContext, IState, CREATE_LOAN, UPDATE_LOAN, RESET_LOANS } from './store.types'

const debug = process.env.NODE_ENV !== 'production'

const state = {
  version: 1,
  loans: []
}

const actions = {
  async updateLoan ({ commit }: IContext, payload: ILoanData) {
    const loan = store.$services.loans.create(payload)
    const loans = state.loans.map((item: ILoanData) => item.id === payload.id ? loan : item)
    commit(UPDATE_LOAN, loans)
  },

  createLoan ({ commit }: IContext, payload: ILoanData): ILoan {
    const loan = store.$services.loans.create(payload)
    commit(CREATE_LOAN, loan)
    return loan
  },

  resetLoans ({ commit }: IContext): void {
    commit(RESET_LOANS)
  }
}

const getters = {
  loanSets: (state: IState) => {
    // @todo move this to the loan service or a new loanset service
    const loanSets = [...state.loans.reduce((previous, currentItem) => {
      const key = `${currentItem.loanAmount.amount}-${currentItem.loanAmount.currency}-${currentItem.baseInterestRate}`
      const item = previous.get(key) || Object.assign({}, currentItem, {
        loans: []
      })

      item.loans.push(currentItem)

      return previous.set(key, item)
    }, new Map()).values()]

    return loanSets
  },

  loanById: (state: IState) => (id: string) => {
    const loan = state.loans.find((loan) => loan.id === id)

    if (!loan) {
      throw new Error('Loan data not found')
    }

    return loan
  }
}

const mutations = {
  [CREATE_LOAN] (state: IState, loan: ILoanData) {
    state.loans.push(loan)
  },

  [UPDATE_LOAN] (state: IState, loans: ILoanData[]) {
    state.loans = loans
  },

  [RESET_LOANS] (state: IState) {
    state.loans = []
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
