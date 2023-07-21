import type { ActionContext, Store } from 'vuex'
import type { ILoanData } from '@/entities'
import type { IProvider } from '@/services'

export const CREATE_LOAN = 'CREATE_LOAN'
export const UPDATE_LOAN = 'UPDATE_LOAN'
export const RESET_LOANS = 'RESET_LOANS'

export interface IRootState {
  version: number
}

export interface IState extends IRootState {
  loans: ILoanData[]
  $services: IProvider
}

export type IContext = ActionContext<IState, IRootState>

export type IStore = Store<IState>
