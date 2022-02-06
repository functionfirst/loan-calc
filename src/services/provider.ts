import { LoansService, IProvider } from '@/services'
import { LoanStore } from '@/store'

export const provider = (): IProvider => {
  const store = new LoanStore()

  return {
    loans: new LoansService(store)
  }
}
