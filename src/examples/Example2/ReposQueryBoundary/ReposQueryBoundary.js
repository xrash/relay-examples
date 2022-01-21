import { Suspense } from 'react'
import ErrorBoundary from 'components/ErrorBoundary'
import { ReposList } from './ReposList'

export const ReposQueryBoundary = ({ owner }) => {
  return (
    <div className="repos__container">
      <ErrorBoundary message={`User ${owner} not found`}>
        <Suspense fallback={'Loading repos list'}>
          <ReposList login={owner} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
