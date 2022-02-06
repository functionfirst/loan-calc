import { ILoanData } from '@/entities'
import { LoansService, IProvider } from '@/services'
// import { LoanStore } from '@/store'

export const provider = (data: ILoanData[]): IProvider => {
  // const store = new LoanStore()
  return {
    loans: new LoansService(data)
  }
}
