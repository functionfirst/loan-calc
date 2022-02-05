import { readonly, ref, Ref } from 'vue'

interface IUseModal {
  setIsOpen: (value: boolean) => void,
  isOpen: Readonly<Ref<boolean>>
}

const isOpen = ref(false)

const setIsOpen = (value: boolean) => {
  isOpen.value = value
}

export default function useModal (): IUseModal {
  return {
    setIsOpen,
    isOpen: readonly(isOpen)
  }
}
