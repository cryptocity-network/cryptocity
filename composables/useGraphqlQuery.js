export default (query) => {
  const runtimeConfig = useRuntimeConfig()
  const key = JSON.stringify(query)
  return useFetch('https://graphql.datocms.com', {
    key,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.GRAPHQL_TOKEN}`
    },
    body: {
      query
    },
    transform: ({ data, errors }) => {
      if (errors) { throw errors }
      return data
    }
  })
}
