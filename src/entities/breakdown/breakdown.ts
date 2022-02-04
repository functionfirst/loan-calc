import { IBreakdown, IBreakdownData, IMoney } from '@/entities'

export class Breakdown implements IBreakdown {
  readonly interest: IMoney
  readonly withoutMargin: IMoney
  readonly withMargin: IMoney

  constructor (data: IBreakdownData) {
    this.interest = data.interest
    this.withoutMargin = data.withoutMargin
    this.withMargin = data.withMargin
  }
}
