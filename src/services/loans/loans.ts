import { ILoansService } from '@/services'
import { ILoan, ILoanData, Loan } from '@/entities'

export class LoansService implements ILoansService {
  constructor (private readonly data: ILoanData[]) {
    this.data = data
  }

  create (data: ILoanData): ILoan {
    const loan = new Loan(data)
    this.data.push(loan)
    return loan
  }
}
