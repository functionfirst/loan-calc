import { ILoanData } from '@/entities'

export interface ILoanStore {
  create(loan: ILoanData): void
  findAll(): ILoanData[]
  findById(): ILoanData
}
