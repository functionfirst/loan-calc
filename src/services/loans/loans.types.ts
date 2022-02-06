import { ILoan, ILoanData } from '@/entities'

export interface ILoansService {
  findAll(): ILoan[]
  findById(id: string): ILoan | undefined
  create(data: ILoanData): ILoan
}
