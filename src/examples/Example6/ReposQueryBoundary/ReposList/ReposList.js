import { useEffect, useState } from 'react'
import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import styles from './ReposList.module.css'
import classnames from 'classnames'
import { useRelayEnvironment, fetchQuery } from 'react-relay'

const ReposListExample6Query = graphql`
query ReposListExample6Query($login: String!, $first: Int, $last: Int, $before: String, $after: String) { 
  user(login: $login) {
    repositories(first: $first, last: $last, before: $before, after: $after, orderBy: { field: CREATED_AT, direction: DESC }, ownerAffiliations: [OWNER]) {
      totalCount
      totalDiskUsage
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
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

export const ReposList = ({ login }) => {
  const environment = useRelayEnvironment()
  const [queryArgs, setQueryArgs] = useState({
    login,
    first: 10,
    last: null,
    before: null,
    after: null,
  })
  const [queryOpts, setQueryOpts] = useState({
    fetchKey: 0,
    fetchPolicy: 'store-or-network',
  })

  const data = useLazyLoadQuery(
    ReposListExample6Query,
    queryArgs,
    queryOpts,
  )

  console.log('data', data)

  useEffect(() => {
    // reset paging
  }, [login])

  if (login === '') {
    return (
      <p>
        {'Please type a github username'}
      </p>
    )
  }

  if (data.user === null) {
    return (
      <p>
        {`User ${login} not found`}
      </p>
    )
  }

  if (data.user.repositories.edges.length === 0) {
    return (
      <p>
        {`This user has zero repos`}
      </p>
    )
  }

  const {
    hasPreviousPage,
    hasNextPage,
    startCursor,
    endCursor,
  } = data.user.repositories.pageInfo

  const fetchPage = (variables) => {
    fetchQuery(environment, ReposListExample6Query, variables)
      .subscribe({
        complete: () => {
          // *After* the query has been fetched, we update
          // our state to re-render with the new fetchKey
          // and fetchPolicy.
          // At this point the data for the query should
          // be cached, so we use the 'store-only'
          // fetchPolicy to avoid suspending.
          setQueryArgs(variables)
          setQueryOpts(prev => {
            return {
              fetchKey: prev.fetchKey + 1,
              fetchPolicy: 'store-only',
            }
          })
        },
        error: (error) => {
          console.log('error', error)
        }
      })
  }

  const handleClickFirst = () => {
    const variables = {
      login,
      first: 10,
      after: null,
      last: null,
      before: null,
    }
    fetchPage(variables)
  }

  const handleClickPrev = () => {
    const variables = {
      login,
      first: null,
      after: null,
      last: 10,
      before: startCursor,
    }
    fetchPage(variables)
  }

  const handleClickNext = () => {
    const variables = {
      login,
      first: 10,
      after: endCursor,
      last: null,
      before: null,
    }
    fetchPage(variables)
  }

  const handleClickLast = () => {
    const variables = {
      login,
      first: null,
      after: null,
      last: 10,
      before: null,
    }
    fetchPage(variables)
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
      <div className={styles.btnContainer}>
        <button
          className={classnames('button', styles.btn, styles.btnPushRight)}
          onClick={handleClickFirst}
          disabled={!hasPreviousPage}
        >
          {'first'}
        </button>
        <button
          className={classnames('button', styles.btn, styles.btnPushRight)}
          onClick={handleClickPrev}
          disabled={!hasPreviousPage}
        >
          {'prev'}
        </button>
        <button
          className={classnames('button', styles.btn, styles.btnPushRight)}
          onClick={handleClickNext}
          disabled={!hasNextPage}
        >
          {'next'}
        </button>
        <button
          className={classnames('button', styles.btn)}
          onClick={handleClickLast}
          disabled={!hasNextPage}
        >
          {'last'}
        </button>
      </div>
    </div>
  )

}
