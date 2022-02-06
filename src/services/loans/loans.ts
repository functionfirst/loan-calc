import { ILoanRepository } from '@/repositories'
import { ILoansService } from '@/services'
import { ILoan, ILoanData, Loan } from '@/entities'

export class LoansService implements ILoansService {
  constructor (private readonly loanRepo: ILoanRepository) {
    this.loanRepo = loanRepo
  }

  findAll (): ILoan[] {
    const data = this.loanRepo.findAll()
    return data.map((loan: ILoanData) => new Loan(loan))
  }

  findById (id: number): ILoan | undefined {
    const data = this.loanRepo.findById(id)
    if (data) {
      return new Loan(data)
    }

    return undefined
  }

  create (data: ILoanData): ILoan {
    const loan = new Loan(data)
    this.loanRepo.create(loan)
    return loan
    // this.data.push(loan)
    // return loan
  }
}
