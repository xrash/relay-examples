import graphql from 'babel-plugin-relay/macro'
import {
  useMutation,
} from 'react-relay/hooks'
import styles from './Example7ReactionController.module.css'

const AddReactionMutation = graphql`
mutation Example7ReactionControllerAddReactionMutation($connections: [ID!]!, $input: AddReactionInput!) { 
  addReaction(input: $input) {
    reaction @appendNode(connections: $connections, edgeTypeName: "ReactionEdge") {
      id
      content
      user {
        login
      }
    }
    subject {
      id
    }
  }
}
`

const RemoveReactionMutation = graphql`
mutation Example7ReactionControllerRemoveReactionMutation($connections: [ID!]!, $input: RemoveReactionInput!) { 
  removeReaction(input: $input) {
    reaction {
      id @deleteEdge(connections: $connections)
      content
      user {
        login
      }
    }
    subject {
      id
    }
  }
}
`

export const Example7ReactionController = ({ pullRequestID, connectionID }) => {

  const [addReaction] = useMutation(AddReactionMutation);
  const [removeReaction] = useMutation(RemoveReactionMutation);

  const reactions = [
    'ROCKET', 'LAUGH', 'HOORAY', 'CONFUSED',
  ]

  const handleClickAddReaction = (reaction) => {
    addReaction({
      variables: {
        connections: [connectionID],
        input: {
          subjectId: pullRequestID,
          content: reaction,
        },
      },
      onCompleted: () => {
        console.log('onCompleted')
      },
    })
  }

  const handleClickRemoveReaction = (reaction) => {
    removeReaction({
      variables: {
        connections: [connectionID],
        input: {
          subjectId: pullRequestID,
          content: reaction,
        }
      },
      onCompleted: () => {
        console.log('onCompleted')
      },
    })
  }

  const renderAddReactions = () => {
    return reactions.map(reaction => (
      <div key={`add-${reaction}`}>
        <button
          className="button button--small"
          onClick={() => handleClickAddReaction(reaction)}
        >
          {`add ${reaction}`}
        </button>
        <div className="spacer8"></div>
      </div>
    ))
  }

  const renderRemoveReactions = () => {
    return reactions.map(reaction => (
      <div key={`remove-${reaction}`}>
        <button
          className="button button--small"
          onClick={() => handleClickRemoveReaction(reaction)}
        >
          {`rem ${reaction}`}
        </button>
        <div className="spacer8"></div>
      </div>
    ))
  }

  return (
    <div className={styles.container}>
      <div className="spacer8--right">
        {renderRemoveReactions()}
      </div>
      <div>
        {renderAddReactions()}
      </div>
    </div>
  )
}
