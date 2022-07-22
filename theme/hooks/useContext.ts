import { ref } from 'vue'
import { createContext } from '../utils/createContext'

const HairyContext = createContext('Hairy', () => {
  const headerRef = ref<HTMLDivElement>()

  return {
    headerRef,
  }
})

export const useContext = () => {
  return HairyContext.inject()
}

export default HairyContext
