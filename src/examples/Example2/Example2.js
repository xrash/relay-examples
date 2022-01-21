import { ReposQueryBoundary } from './ReposQueryBoundary'
import { useViewer } from 'lib/viewer'
import queryString from 'query-string'
import styles from './Example2.module.css'

export const Example2 = () => {
  const { login } = useViewer()
  const { owner } = queryString.parse(window.location.search);

  return (
    <div className={styles.container}>
      <ReposQueryBoundary owner={login ?? owner} />
    </div>
  )
}
