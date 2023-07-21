import type { ILoan, ILoanData } from '@/entities'

export interface ILoansService {
  create(data: ILoanData): ILoan
}
