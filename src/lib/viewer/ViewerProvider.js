import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import { ViewerProviderContext } from './context'

const ViewerProviderQuery = graphql`
query ViewerProviderQuery {
  viewer {
    login
    repositories(last: 1) {
      edges {
        node {
          name
        }
      }
    }
  }
}
`

export const ViewerProvider = ({ children }) => {
  const data = useLazyLoadQuery(ViewerProviderQuery);

  const { login } = data.viewer

  const value = {
    login,
  }

  return (
    <ViewerProviderContext.Provider value={value}>
      {children}
    </ViewerProviderContext.Provider>
  )
}
