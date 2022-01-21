import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import styles from './PRDetails.module.css'

const PRDetailsQuery = graphql`
query PRDetailsQuery ($owner: String!, $repo: String!, $pullRequestNumber: Int!){ 
  repository(owner: $owner, name: $repo) { 
    pullRequest(number: $pullRequestNumber) {
      id
      title
      bodyText
    }
  }
}
`

export const PRDetails = ({
  owner,
  repo,
  pullRequestNumber,
}) => {
  const data = useLazyLoadQuery(PRDetailsQuery, {
    owner,
    repo,
    pullRequestNumber,
  });

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
    </div>
  )
}
