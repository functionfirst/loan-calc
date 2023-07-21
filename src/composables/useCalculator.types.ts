import type { Ref } from 'vue'
import type { ILoanData } from '@/entities'
import type { IUseModal } from './useModal.types'

export interface IUseCalculator extends IUseModal {
  createNewLoan: (data?: ILoanData) => void
  editLoan: (id: string) => void
  saveLoan: () => void
  loan: ILoanData
  loading: Readonly<Ref<boolean>>
}
