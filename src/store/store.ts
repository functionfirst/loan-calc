import { ICurrency, ILoanData, Loan } from '@/entities'
import { Money } from '@/entities/money/money'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { IContext, IState, CREATE_LOAN, MODAL, FORM_DATA, UPDATE_LOAN, IDifferentLender } from './store.types'

const debug = process.env.NODE_ENV !== 'production'

const formData = {
  id: '',
  loanAmount: new Money({
    amount: 0,
    currency: 'GBP' as ICurrency
  }),
  baseInterestRate: '',
  startDate: '',
  endDate: '',
  lender: '',
  margin: ''
}

const state = {
  version: 1,
  isModalOpen: false,
  formData,
  loans: []
}

const actions = {
  editLoan ({ commit, dispatch, state }: IContext, id: string) {
    const loan = state.loans.find((loan) => loan.id === id)

    if (!loan) {
      throw new Error('This loan could not be found')
    }

    commit(FORM_DATA, loan)
    dispatch('toggleModal', true)
  },

  differentLender ({ commit, dispatch }: IContext, payload: IDifferentLender) {
    const loan = Object.assign({ ...formData }, {
      loanAmount: payload?.loanAmount,
      baseInterestRate: payload?.baseInterestRate
    })

    commit(FORM_DATA, loan)
    dispatch('toggleModal', true)
  },

  newLoan ({ commit, dispatch }: IContext) {
    commit(FORM_DATA, { ...formData })
    dispatch('toggleModal', true)
  },

  toggleModal ({ commit }: IContext, toggle: boolean) {
    commit(MODAL, toggle)
  },

  updateLoan ({ commit }: IContext, payload: ILoanData) {
    // @todo replace this with a service call
    // const loan = store.$services.loans.create(payload)
    const loan = new Loan(payload)
    const loans = state.loans.map((item: ILoanData) => item.id === payload.id ? loan : item)

    commit(UPDATE_LOAN, loans)
  },

  createLoan ({ commit }: IContext, payload: ILoanData) {
    // @todo call a service here to create a new loan
    const loan = new Loan(payload)
    commit(CREATE_LOAN, loan)
  }
}

const getters = {
  loanSets: (state: IState) => {
    // @todo move this to the loan service or a new loanset service???
    const loanSets = [...state.loans.reduce((previous, currentItem) => {
      const key = `${currentItem.loanAmount.amount}-${currentItem.loanAmount.currency}-${currentItem.baseInterestRate}`
      const item = previous.get(key) || Object.assign({}, currentItem, {
        loans: []
      })

      item.loans.push(new Loan(currentItem))

      return previous.set(key, item)
    }, new Map()).values()]

    return loanSets
  },

  loanById: (state: IState) => (id: string) => state.loans.find((loan) => loan.id === id)
}

const mutations = {
  [CREATE_LOAN] (state: IState, loan: ILoanData) {
    state.loans.push(loan)
  },

  [UPDATE_LOAN] (state: IState, loans: ILoanData[]) {
    state.loans = loans
  },

  [MODAL] (state: IState, toggle: boolean) {
    state.isModalOpen = toggle
  },

  [FORM_DATA] (state: IState, payload: ILoanData) {
    state.formData = payload
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
