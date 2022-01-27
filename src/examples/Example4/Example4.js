import { useState } from 'react'
import { PullRequestReactions } from './PullRequestReactions'
import styles from './Example4.module.css'

export const Example4 = () => {
  const [owner, setOwner] = useState('')
  const [repo, setRepo] = useState('')

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
      </div>
      <div className="spacer32"></div>
      <div>
        {owner && repo && (
          <PullRequestReactions owner={owner} name={repo} />
        )}
      </div>
    </>
  )
}
