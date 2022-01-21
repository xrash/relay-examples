import { Suspense, useState } from 'react'
import graphql from 'babel-plugin-relay/macro'
import ErrorBoundary from 'components/ErrorBoundary'
import { useQueryLoader } from 'react-relay'
import { PreloadedSearchQueryData } from './PreloadedSearchQueryData'
import styles from './PreloadedSearchQuery.module.css'

const PreloadedSearchQuerySearchQuery = graphql`
query PreloadedSearchQuerySearchQuery($query: String!) { 
  search(first: 15, query: $query, type: REPOSITORY) { 
    edges {
      node {
        ... on Repository {
          nameWithOwner
          owner {
            id
          }
        }
      }
    }
  }
}
`

export const PreloadedSearchQuery = () => {
  const [value, setValue] = useState('')
  const [queryReference, loadQuery] = useQueryLoader(
    PreloadedSearchQuerySearchQuery
  )

  const handleClickLoadQuery = () => {
    loadQuery({
      query: value,
    })
  }

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="search for repos by name"
          className="input"
          type="text"
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
        />
      </div>
      <div className="spacer32"></div>
      <div>
        <button
          className="button"
          onClick={handleClickLoadQuery}
        >{'loadQuery'}</button>
      </div>
      <div className="spacer32"></div>
      <div>
        <ErrorBoundary message="Preloaded query threw an error!">
          <Suspense fallback="Preloaded query suspended">
            {queryReference !== null && (
              <PreloadedSearchQueryData
                query={PreloadedSearchQuerySearchQuery}
                queryReference={queryReference}
              />
            )}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
