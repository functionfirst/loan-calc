import { differenceInMonths, format } from 'date-fns'

const formatDate = (date: string): string => format(new Date(date), 'do MMM yyyy')

export {
  formatDate,
  differenceInMonths
}
