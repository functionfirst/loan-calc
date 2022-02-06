import { IMoney } from '@/entities'

export interface IBreakdownData {
  readonly interest: number
  readonly withoutMargin: number
  readonly withMargin: number
}

export interface IBreakdown {
  readonly interest: IMoney
  readonly withoutMargin: IMoney
  readonly withMargin: IMoney
}
