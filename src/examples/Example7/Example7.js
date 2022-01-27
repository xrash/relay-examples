import { useState, Suspense } from 'react'
import ErrorBoundary from 'components/ErrorBoundary'
import { Example7Reactions } from './Example7Reactions'
import styles from './Example7.module.css'

export const Example7 = () => {
  const [owner, setOwner] = useState('')
  const [repo, setRepo] = useState('')
  const [pullRequestNumber, setPullRequestNumber] = useState('')

  return (
    <>
      <div className={styles.container}>
        <div>
          <input
            placeholder="owner"
            className="input"
            type="text"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value)
            }}
          />
        </div>
        <div className="spacer32"></div>
        <div>
          <input
            placeholder="repo"
            className="input"
            type="text"
            value={repo}
            onChange={(e) => {
              setRepo(e.target.value)
            }}
          />
        </div>
        <div className="spacer32"></div>
        <div>
          <input
            placeholder="pr number"
            className="input"
            type="text"
            value={pullRequestNumber}
            onChange={(e) => {
              setPullRequestNumber(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="spacer32"></div>
      <div>
        {owner && repo && pullRequestNumber && (
          <ErrorBoundary>
            <Suspense fallback={'Loading PR'}>
              <Example7Reactions
                owner={owner}
                repo={repo}
                pullRequestNumber={parseInt(pullRequestNumber, 10)}
              />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </>
  )
}
