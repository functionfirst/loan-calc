import { Ref } from 'vue'

type ModalFunction = (toggle: boolean) => void

export interface IUseModal {
  isModalOpen: Ref<boolean>,
  setIsModalOpen: ModalFunction
}
