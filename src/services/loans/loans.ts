import { ILoansService } from '@/services'
import { ILoan, ILoanData, Loan } from '@/entities'

export class LoansService implements ILoansService {
  constructor (private readonly loanRepo: ILoanRepository) {
    this.store = store
  }

  findAll (): ILoan[] {
    const data = this.store.findAll()
    return data.map(loan => new Loan(loan))
  }

  findOneById (id: number): ILoan | undefined {
    const data = this.data.find(loan => loan.id === id)
    if (data) {
      return new Loan(data)
    }

    return undefined
  }

  create (data: ILoanData): ILoan {
    const loan = new Loan(data)
    this.store.create(loan)
    return loan
    // this.data.push(loan)
    // return loan
  }
}
