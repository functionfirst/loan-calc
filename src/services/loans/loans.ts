import type { ILoansService } from '@/services'
import { type ILoan, type ILoanData, Loan } from '@/entities'

export class LoansService implements ILoansService {
  create(data: ILoanData): ILoan {
    return new Loan(data)
  }
}
