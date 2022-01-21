import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import { useViewer } from 'lib/viewer'
import styles from './MyRepos.module.css'

const MyReposQuery = graphql`
query MyReposQuery($login: String!) { 
  user(login: $login) {
    repositories(first: 16, orderBy: { field: CREATED_AT, direction: DESC }, ownerAffiliations: [OWNER]) {
      totalCount
      totalDiskUsage
      edges {
        cursor
        node {
          id
          name
          nameWithOwner
          diskUsage
        }
      }
    } 
  }
}
`

export const MyRepos = () => {
  const { login } = useViewer()
  const data = useLazyLoadQuery(
    MyReposQuery,
    { login },
  );

  if (!data.user) {
    return (
      <p>
        {`User ${login} not found`}
      </p>
    )
  }

  if (data.user.repositories.edges.length === 0) {
    return (
      <p>
        {`User ${login} has zero repos`}
      </p>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        {data.user.repositories.edges.map(edge => (
          <div key={edge.node.name}>
            {edge.node.nameWithOwner}
          </div>
        ))}
      </div>
    </div>
  )

}
