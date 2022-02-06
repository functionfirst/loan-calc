import { computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'

type ModalFunction = (toggle: boolean) => void

interface IModal {
  isModalOpen: ComputedRef<boolean>,
  setIsModalOpen: ModalFunction
}

export default function useModal (): IModal {
  const { state, dispatch } = useStore()

  const isModalOpen = computed(() => state.isModalOpen)

  const setIsModalOpen = (toggle: boolean) => {
    dispatch('toggleModal', toggle)
  }

  return {
    isModalOpen,
    setIsModalOpen
  }
}
