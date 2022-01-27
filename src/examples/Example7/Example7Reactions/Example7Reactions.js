import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import { Example7ReactionController } from './Example7ReactionController'
import styles from './Example7Reactions.module.css'

const Example7ReactionsQuery = graphql`
query Example7ReactionsQuery($owner: String!, $repo: String!, $pullRequestNumber: Int!) { 
  user(login: $owner) {
    repository(name: $repo) {
      pullRequest(number: $pullRequestNumber) {
        id
        number
        title
        reactions(first: 16)
        @connection(key: "wachacha_reactions") {
          __id
          edges {
            node {
              id
              content
              user {
                login
              }
            }
          }
        }
      }
    } 
  }
}
`

export const Example7Reactions = ({ owner, repo, pullRequestNumber }) => {
  const data = useLazyLoadQuery(
    Example7ReactionsQuery,
    {
      owner,
      repo,
      pullRequestNumber,
    },
  )

  if (!data.user) {
    return (
      <p>
        {`User ${owner} not found`}
      </p>
    )
  }

  if (!data.user.repository) {
    return (
      <p>
        {`Repo ${repo} not found`}
      </p>
    )
  }

  if (!data.user.repository.pullRequest) {
    return (
      <p>
        {`PR ${pullRequestNumber} not found`}
      </p>
    )
  }

  return (
    <div className={styles.container}>
      <h1>{`Reactions of PR #${data.user.repository.pullRequest.number} ${data.user.repository.pullRequest.title}`}</h1>
      <div className="spacer32"></div>
      {data.user.repository.pullRequest.reactions.edges.map(e => (
        <div key={e.node.id}>
          {`${e.node.user.login}#${e.node.content}`}
        </div>
      ))}
      <Example7ReactionController
        pullRequestID={data.user.repository.pullRequest.id}
        connectionID={data.user.repository.pullRequest.reactions.__id}
      />
    </div>
  )

}
