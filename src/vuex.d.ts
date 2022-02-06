import { ILoan } from '@/entities'

declare module 'vue/types/options' {
  interface ComponentOptions {
    services?: IProvider
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $services: IProvider
  }
}

declare module 'vuex/types/index' {
  interface Store {
    $services: IProvider
  }
}

declare module '@vue/runtime-core' {
  interface State {
    loans: ILoan[]
  }

  // interface ComponentCustomProperties {
  //   $store: Store<State>
  // }
}
