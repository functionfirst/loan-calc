import { IMoney } from '@/entities'

export interface IBreakdownData {
  readonly interest: IMoney
  readonly withoutMargin: IMoney
  readonly withMargin: IMoney
}

export interface IBreakdown extends IBreakdownData {}
