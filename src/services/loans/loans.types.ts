import { ILoan, ILoanData } from '@/entities'

export interface ILoansService {
  findAll(): ILoan[]
  findOneById(id: number): ILoan | undefined
  create(data: ILoanData): ILoan
}
