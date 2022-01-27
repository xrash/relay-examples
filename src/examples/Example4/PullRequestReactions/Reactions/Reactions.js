import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import './Reactions.css'

const ReactionsQuery = graphql`
query ReactionsQuery($owner: String!, $name: String!, $number: Int!) { 
  repository(owner: $owner, name: $name) {
    pullRequest(number: $number) {
      id
      number
      title
      state
      author {
        login
      }
      createdAt
      reactions(first: 16) {
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
`

export const Reactions = ({ owner, name, pullRequestNumber, fetchKey }) => {

  const data = useLazyLoadQuery(ReactionsQuery, {
    owner,
    name,
    number: pullRequestNumber,
  }, {
    fetchKey,
    fetchPolicy: 'store-and-network',
  })

  if (!data.repository) {
    return (
      <p>
        {`No repository found.`}
      </p>
    )
  }

  if (!data.repository.pullRequest) {
    return (
      <p>
        {`No reactions found.`}
      </p>
    )
  }

  if (data.repository.pullRequest.reactions.edges.length === 0) {
    return (
      <p>
        {`PR number ${pullRequestNumber} has no reactions.`}
      </p>
    )
  }

  return (
    <div>
      <p>
        {`Showing reactions for PR number ${pullRequestNumber}`}
      </p>
      <div className="spacer32"></div>
      {data.repository.pullRequest.reactions.edges.map(v => (
        <div key={v.node.id}>
          {`${v.node.user.login} ${v.node.content}`}
        </div>
      ))}
    </div>
  )
}
