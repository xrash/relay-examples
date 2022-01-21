import graphql from 'babel-plugin-relay/macro'
import {
  usePaginationFragment,
} from 'react-relay/hooks'
import styles from './styles.module.css'

const PaginatedRepos_user = graphql`
fragment PaginatedRepos_user on User 
@argumentDefinitions(
  first: {type: "Int", defaultValue: 10}
  after: {type: "String"}
)
@refetchable(queryName: "ReposListMyUniqueQuery") {
  repositories(first: $first, after: $after, orderBy: { field: CREATED_AT, direction: DESC }, ownerAffiliations: [OWNER])
  @connection(key: "PaginatedRepos_user_repositories") {
    edges {
      node {
        id
        name
        nameWithOwner
        diskUsage
      }
    }
  } 
}
`

export const PaginatedRepos = ({ login, user }) => {
  const {
    data,
    loadNext,
    hasNext,
    refetch,

    // loadPrevious,
    // hasPrevious,
    // isLoadingNext,
    // isLoadingPrevious,

  } = usePaginationFragment(PaginatedRepos_user, user)

  const handleClickLoadNext = () => {
    loadNext()
  }

  const handleClickRefetch = () => {
    refetch({
      login,
    })
  }

  const renderRepos = () => {
    return data.repositories.edges.map(e => (
      <div className={styles.repo} key={e.node.id}>
        {e.node.nameWithOwner}
      </div>
    ))
  }

  return (
    <div>
      {renderRepos()}
      <div className="spacer16"></div>
      <div className={styles.buttons}>
        <button
          className="button button--small"
          onClick={handleClickLoadNext}
          disabled={!hasNext}
        >
          {'load next'}
        </button>
        <button
          className="button button--small"
          onClick={handleClickRefetch}
        >
          {'refetch'}
        </button>
      </div>
    </div>
  )

}
