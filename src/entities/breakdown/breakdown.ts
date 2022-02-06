import { IBreakdown, IBreakdownData, ICurrency, IMoney } from '@/entities'
import { Money } from '../money/money'

export class Breakdown implements IBreakdown {
  readonly interest: IMoney
  readonly withoutMargin: IMoney
  readonly withMargin: IMoney

  constructor (data: IBreakdownData, currency: ICurrency) {
    this.interest = new Money({ amount: data.interest, currency })
    this.withoutMargin = new Money({ amount: data.withoutMargin, currency })
    this.withMargin = new Money({ amount: data.withMargin, currency })
  }
}
