import { PRDetailsQueryBoundary } from './PRDetailsQueryBoundary'

export const PullRequestAnotherView = ({
  owner,
  repo,
  pullRequestNumber,
}) => {
  return (
    <PRDetailsQueryBoundary
      owner={owner}
      repo={repo}
      pullRequestNumber={pullRequestNumber}
    />
  )
}
