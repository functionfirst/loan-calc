import { App } from 'vue'
import { provider } from '@/services'
import { store } from '@/store'

// store.$services = provider()

export const services = {
  install (app: App): void {
    // console.log(app)
    // console.log('foo')
    // app.config.globalProperties.$service = store.$services
  }
}
