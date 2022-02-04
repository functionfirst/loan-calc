import { ILoanData } from '@/entities'

export class LoanStore {
  private readonly state = {
    loans: []
  }

  create (loan: ILoanData): void {
    if (loan) {
      throw new Error('Loan data is not defined')
    }

    this.state.loans.push(loan)

    return loan
  }

  findAll (): ILoanData[] {
    return this.state.loans
  }

  findById (id: number): ILoanData | undefined {
    const data = this.state.loans.find(loan => loan.id === id)
    if (data) {
      return data
    }

    return undefined
  }
}
