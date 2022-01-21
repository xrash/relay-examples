import { usePreloadedQuery } from 'react-relay'

export const PreloadedSearchQueryData = ({ query, queryReference }) => {
  const data = usePreloadedQuery(query, queryReference);

  if (data.search.edges.length === 0) {
    return (
      <p>
        {`No repositories found.`}
      </p>
    )
  }

  return (
    <>
      {data.search.edges.map(e => (
        <div key={e.node.nameWithOwner}>{e.node.nameWithOwner}</div>
      ))}
    </>
  )
}
