export type ICurrency = 'GBP' | 'USD'

export interface IMoneyData {
  readonly amount: number
  readonly currency: ICurrency
}

export interface IMoney extends IMoneyData {}
