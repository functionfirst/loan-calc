import { ILoanData } from '@/entities'
import { LoansService, IProvider } from '@/services'

export const provider = (data: ILoanData[]): IProvider => {
  return {
    loans: new LoansService(data)
  }
}
