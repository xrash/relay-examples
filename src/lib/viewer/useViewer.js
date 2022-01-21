import { useContext } from 'react'
import { ViewerProviderContext } from './context'

export const useViewer = () => {
  return useContext(ViewerProviderContext)
}
