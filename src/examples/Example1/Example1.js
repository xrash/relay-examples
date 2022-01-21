import { Suspense } from 'react'
import { ReposQueryBoundary } from './ReposQueryBoundary'
import styles from './Example1.module.css'

export const Example1 = () => {
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
