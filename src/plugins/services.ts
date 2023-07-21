import type { App } from 'vue'
import { provider } from '@/services'
// import { store } from '@/store'

// store.$services = provider()

export const services = {
  install(app: App): void {
    app.config.globalProperties.$services = provider() // store.$services
  }
}
