import type { ICurrency } from '@/entities'
import { locales } from '@/libs/locales'

export const formatCurrency = (value: number, currency: ICurrency): string => {
  const options = {
    style: 'currency',
    currency
  }

  const locale = locales[currency]

  return new Intl.NumberFormat(locale, options).format(value)
}
