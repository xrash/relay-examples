import { Suspense } from 'react'
import ErrorBoundary from 'components/ErrorBoundary'
import { PRDetails } from './PRDetails'

export const PRDetailsQueryBoundary = ({
  owner,
  repo,
  pullRequestNumber,
}) => {
  if (!owner || !repo || !pullRequestNumber) {
    return null
  }

  return (
    <ErrorBoundary message={'Error loading PR.'}>
      <Suspense fallback={'Loading PR...'}>
        <PRDetails
          owner={owner}
          repo={repo}
          pullRequestNumber={pullRequestNumber}
        />
      </Suspense>
    </ErrorBoundary>
  )
}
