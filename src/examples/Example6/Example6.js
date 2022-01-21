import { Suspense } from 'react'
import { ReposQueryBoundary } from './ReposQueryBoundary'
import styles from './Example6.module.css'

export const Example6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Suspense fallback={'Loading repos...'}>
          <ReposQueryBoundary />
        </Suspense>
      </div>
    </div>
  )
}
