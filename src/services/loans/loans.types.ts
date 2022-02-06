import { ILoan, ILoanData } from '@/entities'

export interface ILoansService {
  findAll(): ILoan[]
  findById(id: number): ILoan | undefined
  create(data: ILoanData): ILoan
}
