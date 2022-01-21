import { Suspense } from 'react'
import ErrorBoundary from 'components/ErrorBoundary'
import { MyRepos } from './MyRepos'
import styles from './Example0.module.css'

export const Example0 = () => {
  return (
    <div className={styles.container}>
      <ErrorBoundary message={'Error loading repos.'}>
        <Suspense fallback={'Loading repos...'}>
          <MyRepos />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
