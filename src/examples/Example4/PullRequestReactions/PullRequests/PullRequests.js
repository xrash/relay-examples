import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import './PullRequests.css'

const PullRequestsQuery = graphql`
query PullRequestsQuery($owner: String!, $name: String!) { 
  repository(owner: $owner, name: $name) {
    pullRequests(first: 8) {
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          number
          title
          state
          author {
            login
          }
          createdAt
          reactions(first: 3) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
}
`

export const PullRequests = ({ owner, name, onSelectPR }) => {
  const data = useLazyLoadQuery(PullRequestsQuery, { owner, name });

  const handleClick = (id, number) => {
    onSelectPR(id, number)
  }

  if (!data.repository) {
    return (
      <p>{`Could not find repo for owner ${owner} and name ${name}`}</p>
    )
  }

  return (
    <ol>
      {data.repository.pullRequests.edges.map(e => (
        <li
          key={e.node.id}
          className="pullrequest__row"
        >
          <button
            className="anchor"
            onClick={() => { handleClick(e.node.id, e.node.number) }}
          >
            {`${e.node.number}. ${e.node.title}`}
          </button>
        </li>
      ))}
    </ol>
  )
}
