import { ICurrency, IMoney } from '@/entities'

export class Money implements IMoney {
  readonly amount: number
  readonly currency: ICurrency

  constructor (data: IMoney) {
    this.amount = +data.amount
    this.currency = data.currency
  }
}
