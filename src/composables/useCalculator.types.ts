import { Ref } from 'vue'
import { ILoanData } from '@/entities'
import { IUseModal } from './useModal.types'

export interface IUseCalculator extends IUseModal {
  createNewLoan: (data?: ILoanData) => void
  editLoan: (id: string) => void
  saveLoan: () => void
  loan: ILoanData
  loading: Readonly<Ref<boolean>>
}
