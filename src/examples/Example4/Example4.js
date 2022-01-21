import './Example4.css'
import { PullRequestReactions } from './PullRequestReactions'
import { useViewer } from 'lib/viewer'
import queryString from 'query-string'

export const Example4 = () => {
  const { login, firstRepo } = useViewer()
  const { owner, repo } = queryString.parse(window.location.search);

  return (
    <div className="ex4__container">
      <PullRequestReactions owner={owner ?? login} name={repo ?? firstRepo} />
    </div>
  )
}
