export class LoanRepository {
  public readonly store = Store

  createLoan(data: ILoanData) {
    return this.store.create(data)
  }
}
