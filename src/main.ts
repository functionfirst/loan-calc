import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { services } from './plugins'
import { store } from './store'
import './assets/tailwind.css'

createApp(App)
  .use(router)
  .use(store)
  .use(services)
  .mount('#app')
