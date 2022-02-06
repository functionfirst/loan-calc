import { ActionContext, Store } from 'vuex'
import { ILoanData } from '@/entities'

export const CREATE_LOAN = 'CREATE_LOAN'
export const MODAL = 'MODAL'
export const FORM_DATA = 'FORM_DATA'

export interface IRootState {
  version: number
}

export interface IState extends IRootState {
  isModalOpen: boolean,
  formData: ILoanData,
  loans: ILoanData[]
}

export type IContext = ActionContext<IState, IRootState>

export type IStore = Store<IState>
