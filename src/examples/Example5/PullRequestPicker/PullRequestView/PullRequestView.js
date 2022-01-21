import { useEffect, useState } from 'react'
import graphql from 'babel-plugin-relay/macro'
import {
  usePreloadedQuery,
  useMutation,
} from 'react-relay/hooks'
import styles from './PullRequestView.module.css'

const PullRequestViewUpdatePullRequestMutation = graphql`
mutation PullRequestViewUpdatePullRequestMutation($input: UpdatePullRequestInput!) { 
  updatePullRequest(input: $input) { 
    pullRequest {
      id
      title
      bodyText
    }
  }
}
`

export const PullRequestView = ({ query, queryReference }) => {
  const data = usePreloadedQuery(query, queryReference);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [optimistic, setOptimistic] = useState(false)
  const [updatePR] = useMutation(PullRequestViewUpdatePullRequestMutation);

  useEffect(() => {
    if (data.repository && data.repository.pullRequest) {
      setTitle(data.repository.pullRequest.title)
      setBody(data.repository.pullRequest.bodyText)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePR({
      variables: {
        input: {
          pullRequestId: data.repository.pullRequest.id,
          title,
          body,
        }
      },
      ...(optimistic && {
        optimisticResponse: {
          updatePullRequest: {
            pullRequest: {
              id: data.repository.pullRequest.id,
              title,
              bodyText: body,
            }
          }
        }
      })
    })
  }

  if (!data.repository) {
    return (
      <p>
        {'Repository not found.'}
      </p>
    )
  }

  if (!data.repository.pullRequest) {
    return (
      <p>
        {'Pull request not found.'}
      </p>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.pr}>
        <h2>{'view'}</h2>
        <div className="spacer32"></div>
        <div>
          <em>{data.repository.pullRequest.id}</em>
        </div>
        <div className="spacer32"></div>
        <div>
          <p><strong>{'title'}</strong></p>
          <p>{data.repository.pullRequest.title}</p>
        </div>
        <div className="spacer8"></div>
        <div>
          <p><strong>{'body'}</strong></p>
          <p>{data.repository.pullRequest.bodyText}</p>
        </div>
        <div className="spacer8"></div>
        <div>
          <p><strong>{'createdAt'}</strong></p>
          <p>{data.repository.pullRequest.createdAt}</p>
        </div>
        <div className="spacer8"></div>
        <div>
          <p><strong>{'mergeable'}</strong></p>
          <p>{data.repository.pullRequest.mergeable}</p>
        </div>
      </div>
      <div className={styles.form}>
        <h2>{'edit'}</h2>
        <div className="spacer32"></div>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <div className="spacer32"></div>
          <textarea
            className="input"
            onChange={(e) => { setBody(e.target.value) }}
            value={body}
          />
          <div className="spacer32"></div>
          <div>
            <p>{'optimistic'}</p>
            <input
              type="checkbox"
              checked={optimistic}
              onChange={(e) => { setOptimistic(e.target.checked) }} />

          </div>
          <div className="spacer32"></div>
          <button
            className="button"
          >
            {'update'}
          </button>
        </form>
      </div>
    </div>
  )
}
