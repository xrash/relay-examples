import { useState, Suspense } from 'react'
import graphql from 'babel-plugin-relay/macro'
import {
  useQueryLoader,
} from 'react-relay/hooks'
import styles from './PullRequestPicker.module.css'
import { PullRequestView } from './PullRequestView'
import { PullRequestAnotherView } from './PullRequestAnotherView'

const PullRequestPickerQuery = graphql`
query PullRequestPickerQuery ($owner: String!, $repo: String!, $pullRequestNumber: Int!){ 
  repository(owner: $owner, name: $repo) { 
    pullRequest(number: $pullRequestNumber) {
      id
      title
      bodyText
      author {
        login
      }
      createdAt
      isDraft
      mergeable
    }
  }
}
`

export const PullRequestPicker = () => {
  const [owner, setOwner] = useState('')
  const [repo, setRepo] = useState('')
  const [pullRequestNumber, setPullRequestNumber] = useState('')
  const [queryReference, loadQuery] = useQueryLoader(
    PullRequestPickerQuery
  )

  const handleClickLoadPR = () => {
    if (!owner || !repo || !pullRequestNumber) {
      alert('must fill all the inputs')
      return
    }

    loadQuery({
      owner,
      repo,
      pullRequestNumber: parseInt(pullRequestNumber, 10),
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div>
            <input
              className="input"
              type="text"
              placeholder="owner"
              value={owner}
              onChange={(e) => { setOwner(e.target.value) }}
            />
          </div>
          <div className="spacer16"></div>
          <div>
            <input
              className="input"
              type="text"
              placeholder="repo"
              value={repo}
              onChange={(e) => { setRepo(e.target.value) }}
            />
          </div>
          <div className="spacer16"></div>
          <div>
            <input
              className="input"
              type="text"
              placeholder="pullRequestNumber"
              value={pullRequestNumber}
              onChange={(e) => { setPullRequestNumber(e.target.value) }}
            />
          </div>
          <div className="spacer32"></div>
          <div>
            <button
              className="button"
              onClick={handleClickLoadPR}
            >
              {'Load PR'}
            </button>
          </div>
        </div>
        <div className={styles.column}>
          <PullRequestAnotherView
            owner={owner}
            repo={repo}
            pullRequestNumber={parseInt(pullRequestNumber, 10)}
          />
        </div>
      </div>
      <div className="spacer32"></div>
      <div>
        <Suspense fallback={'Loading PR...'}>
          {queryReference !== null && (
            <PullRequestView
              query={PullRequestPickerQuery}
              queryReference={queryReference}
            />
          )}
        </Suspense>
      </div>
    </div>
  )
}
