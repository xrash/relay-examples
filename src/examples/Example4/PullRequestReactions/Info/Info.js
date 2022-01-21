import { Suspense } from 'react'
import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import ErrorBoundary from 'components/ErrorBoundary'
import { InfoDescription } from './InfoDescription'
import './Info.css'

const InfoQuery = graphql`
query InfoQuery($owner: String!, $name: String!) { 
  repository(owner: $owner, name: $name) {
    nameWithOwner
    createdAt
    updatedAt
    stargazerCount
    ...InfoDescription_repository
  }
}
`

export const Info = ({ owner, name }) => {
  const data = useLazyLoadQuery(InfoQuery, { owner, name });

  if (!data.repository) {
    return (
      <p>{`Could not find repo for owner ${owner} and name ${name}`}</p>
    )
  }

  return (
    <div className="repodetails__info__container">
      <h2>{data.repository.nameWithOwner}</h2>
      <p>created at {data.repository.createdAt}</p>
      <p>updated at {data.repository.updatedAt}</p>
      <p>stargazers {data.repository.stargazerCount}</p>
      <div className="spacer16"></div>
      <ErrorBoundary message={`Repository ${name} not found`}>
        <Suspense fallback={'Loading repo details'}>
          <InfoDescription repository={data.repository} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
