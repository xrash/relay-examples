import { useEffect, useState } from 'react'
import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import styles from './ReposList.module.css'
import classnames from 'classnames'

const ReposListExample1Query = graphql`
query ReposListExample1Query($login: String!, $first: Int, $last: Int, $before: String, $after: String) { 
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
  const [paging, setPaging] = useState({
    first: 10,
    last: null,
    before: null,
    after: null,
  })

  const { first, last, before, after } = paging

  const data = useLazyLoadQuery(
    ReposListExample1Query,
    { login, first, last, before, after },
  );

  useEffect(() => {
    setPaging({
      first: 10,
      last: null,
      before: null,
      after: null,
    })
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

  const handleClickFirst = () => {
    setPaging({
      first: 10,
      after: null,
      last: null,
      before: null,
    })
  }

  const handleClickPrev = () => {
    setPaging({
      first: null,
      after: null,
      last: 10,
      before: startCursor,
    })
  }

  const handleClickNext = () => {
    setPaging({
      first: 10,
      after: endCursor,
      last: null,
      before: null,
    })
  }

  const handleClickLast = () => {
    setPaging({
      first: null,
      after: null,
      last: 10,
      before: null,
    })
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
