import { App } from 'vue'
import { provider } from '@/services'
import { store } from '@/store'
import { ILoanData } from '@/entities'

const data: ILoanData[] = []

store.$services = provider(data)

export const services = {
  install (app: App): void {
    app.config.globalProperties.$services = store.$services
  }
}
