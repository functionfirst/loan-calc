import { IMoney, IMoneyData } from './money.types'

export class Money implements IMoney {
  readonly amount
  readonly currency

  constructor (data: IMoneyData) {
    this.amount = data.amount
    this.currency = data.currency
  }
}
