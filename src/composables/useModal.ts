import { readonly, ref, watch } from 'vue'
import type { IUseModal } from './useModal.types'

const ESCAPE = 'Escape'

export default function useModal(): IUseModal {
  const isModalOpen = ref(false)

  const setIsModalOpen = (toggle: boolean) => {
    isModalOpen.value = toggle
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
    isModalOpen: readonly(isModalOpen),
    setIsModalOpen
  }
}
