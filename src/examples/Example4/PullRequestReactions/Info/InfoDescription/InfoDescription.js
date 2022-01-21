import graphql from 'babel-plugin-relay/macro'
import {
  useFragment,
} from 'react-relay/hooks'

const InfoDescription_repository = graphql`
fragment InfoDescription_repository on Repository {
  description
}
`

export const InfoDescription = (props) => {
  const data = useFragment(InfoDescription_repository, props.repository)

  return (
    <div>
      {data.description}
    </div>
  )
}
