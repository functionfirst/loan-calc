import { ILoan } from '@/entities'

declare module '@vue/runtime-core' {
  interface State {
    loans: ILoan[]
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
