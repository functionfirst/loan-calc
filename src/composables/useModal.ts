import { computed, ComputedRef, watch } from 'vue'
import { useStore } from 'vuex'

type ModalFunction = (toggle: boolean) => void

interface IModal {
  isModalOpen: ComputedRef<boolean>,
  setIsModalOpen: ModalFunction
}

export default function useModal (): IModal {
  const ESCAPE = 'Escape'
  const { state, dispatch } = useStore()

  const isModalOpen = computed(() => state.isModalOpen)

  const setIsModalOpen = (toggle: boolean) => {
    dispatch('toggleModal', toggle)
  }

  const escapeKey = (event: Event): void => {
    const e = event as KeyboardEvent
    if (e.key !== ESCAPE) { return }
    setIsModalOpen(false)
  }

  const closeModalOnEscape = (isOpen: boolean) => {
    const action = isOpen ? 'addEventListener' : 'removeEventListener'
    document[action]('keyup', escapeKey)
  }

  watch(isModalOpen, closeModalOnEscape)

  return {
    isModalOpen,
    setIsModalOpen
  }
}
