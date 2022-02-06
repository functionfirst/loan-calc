import { ICurrency } from '@/entities'

export interface IMoney {
  readonly amount: number
  readonly currency: ICurrency
}
