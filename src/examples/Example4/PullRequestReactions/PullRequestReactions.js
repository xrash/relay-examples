import { Suspense, useState } from 'react'
import ErrorBoundary from 'components/ErrorBoundary'
import { Info } from './Info'
import { PullRequests } from './PullRequests'
import { Reactions } from './Reactions'
import { ReactionController } from './ReactionController'
import './PullRequestReactions.css'

export const PullRequestReactions = ({ owner, name }) => {
  const [fetchKey, setFetchKey] = useState(0)
  const [pullRequest, setPullRequest] = useState(null)

  const handleSelectPR = (id, number) => {
    setPullRequest({
      id, number,
    })
  }

  return (
    <div className="repodetailspage__container">
      <div className="repodetailspage__info">
        <h2>{'Repository details'}</h2>
        <div className="spacer32"></div>
        <ErrorBoundary>
          <Suspense fallback={`Loading repo details for ${owner}/${name}`}>
            {<Info owner={owner} name={name} />}
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="repodetailspage__prs">
        <h2>{'Pull Requests'}</h2>
        <div className="spacer32"></div>
        <ErrorBoundary>
          <Suspense fallback={`Loading repo details for ${owner}/${name}`}>
            <PullRequests owner={owner} name={name} onSelectPR={handleSelectPR} />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="repodetailspage__reactions">
        <h2>{'Reactions'}</h2>
        <div className="spacer32"></div>
        {pullRequest === null && (
          <p>{'Select a Pull Request from the left panel to see its reactions here'}</p>
        )}
        {pullRequest !== null && (
          <>
            <ErrorBoundary>
              <Suspense
                fallback={
                  `Loading reactions for PR ${pullRequest.number} of ${owner}/${name}`
                }
              >
                <Reactions
                  owner={owner}
                  name={name}
                  pullRequestNumber={pullRequest.number}
                  fetchKey={fetchKey}
                />
              </Suspense>
            </ErrorBoundary>
            <div className="spacer32"></div>
            <ReactionController
              refetch={() => { setFetchKey(v => v + 1) }}
              pullRequestID={pullRequest.id}
            />
          </>
        )}
      </div>
    </div>
  )
}
