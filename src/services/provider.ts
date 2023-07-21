import { LoansService, type IProvider } from '@/services'

export const provider = (): IProvider => {
  return {
    loans: new LoansService()
  }
}
