import { useViewer } from 'lib/viewer'
import { Link } from 'wouter'
import styles from './Summary.module.css'

const examples = [
  {
    title: 'Example 0: Basic useLazyLoadQuery usage',
    path: '/examples/example-0',
  },
  {
    title: 'Example 1: Cursor pagination with useLazyLoadQuery',
    path: '/examples/example-1',
  },
  {
    title: 'Example 2: Infinite pagination with usePaginationFragment',
    path: '/examples/example-2',
  },
  {
    title: 'Example 3: Basic usePreloadedQuery usage',
    path: '/examples/example-3',
  },
  {
    title: 'Example 4: useMutation adding item to a list then refetching the list',
    path: '/examples/example-4',
  },
  {
    title: 'Example 5: useMutation updating single node in cache + optimistic updates',
    path: '/examples/example-5',
  },
  {
    title: 'Example 6: Cursor pagination while avoiding Suspense with fetchQuery',
    path: '/examples/example-6',
  },
  {
    title: 'Sandbox (unstable)',
    path: '/sandbox',
  },
]

export const Summary = () => {
  const { login } = useViewer()

  const renderExamples = () => examples.map(e => (
    <li key={e.path}>
      <Link href={e.path}>
        <button className="anchor">{e.title}</button>
      </Link>
    </li>
  ))

  return (
    <div className={styles.container}>
      <h1>{`Using token from ${login}`}</h1>
      <div className="spacer32"></div>
      <ol className={styles.list}>
        {renderExamples()}
      </ol>
    </div>
  )
}
