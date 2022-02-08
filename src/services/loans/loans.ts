import { ILoansService } from '@/services'
import { ILoan, ILoanData, Loan } from '@/entities'

export class LoansService implements ILoansService {
  create (data: ILoanData): ILoan {
    return new Loan(data)
  }
}
