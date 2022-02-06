import { ILoansService } from '@/services'
import { ILoan, ILoanData, Loan } from '@/entities'

export class LoansService implements ILoansService {
  constructor (private readonly data: ILoanData[]) {
    this.data = data
  }

  findAll (): ILoan[] {
    return this.data.map((loan: ILoanData) => new Loan(loan))
  }

  findById (id: string): ILoan | undefined {
    const data = this.data.find((loan: ILoanData) => loan.id === id)
    if (data) {
      return new Loan(data)
    }

    return undefined
  }

  create (data: ILoanData): ILoan {
    const loan = new Loan(data)
    this.data.push(loan)
    return loan
  }
}
