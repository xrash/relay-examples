import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import { PaginatedRepos } from './PaginatedRepos'

const ReposListExample2Query = graphql`
query ReposListExample2Query($login: String!) { 
  user(login: $login) {
    id
    ...PaginatedRepos_user
  }
}
`

export const ReposList = ({ login }) => {

  const data = useLazyLoadQuery(ReposListExample2Query, {
    login,
  })

  return (
    <div>
      <PaginatedRepos login={login} user={data.user} />
    </div>
  )

}
