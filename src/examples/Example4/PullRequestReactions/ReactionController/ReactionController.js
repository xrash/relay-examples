import graphql from 'babel-plugin-relay/macro'
import {
  useMutation,
} from 'react-relay/hooks'
import './ReactionController.css'

const ReactionControllerAddReactionMutation = graphql`
mutation ReactionControllerAddReactionMutation($input: AddReactionInput!) { 
  addReaction(input: $input) {
    reaction {
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

const ReactionControllerRemoveReactionMutation = graphql`
mutation ReactionControllerRemoveReactionMutation($input: RemoveReactionInput!) { 
  removeReaction(input: $input) {
    reaction {
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

export const ReactionController = ({ pullRequestID, refetch }) => {

  const [addReaction] = useMutation(ReactionControllerAddReactionMutation);
  const [removeReaction] = useMutation(ReactionControllerRemoveReactionMutation);

  const reactions = [
    'ROCKET', 'LAUGH', 'HOORAY', 'CONFUSED',
  ]

  const handleClickAddReaction = (reaction) => {
    addReaction({
      variables: {
        input: {
          subjectId: pullRequestID,
          content: reaction,
        }
      },
      onCompleted: () => {
        console.log('onCompleted')
        refetch()
      }
    })
  }

  const handleClickRemoveReaction = (reaction) => {
    removeReaction({
      variables: {
        input: {
          subjectId: pullRequestID,
          content: reaction,
        }
      },
      onCompleted: () => {
        console.log('onCompleted')
        refetch()
      }
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
    <div className="reactioncontroller__container">
      <div className="reactioncontroller__column spacer8--right">
        {renderRemoveReactions()}
      </div>
      <div className="reactioncontroller__column">
        {renderAddReactions()}
      </div>
    </div>
  )
}
