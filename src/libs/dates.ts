import { differenceInDays, differenceInMonths, format } from 'date-fns'

const diffInDays = (endDate: string, startDate: string): number => differenceInDays(new Date(endDate), new Date(startDate))

const diffInMonths = (endDate: string, startDate: string): number => differenceInMonths(new Date(endDate), new Date(startDate))

const formatDate = (date: string, template = 'do MMM yyyy'): string => format(new Date(date), template)

export {
  diffInDays,
  diffInMonths,
  formatDate
}
