
export default (options) => {
  const { query, variables = {} } = options
  const runtimeConfig = useRuntimeConfig()
  const key = JSON.stringify(options)
  return useFetch('https://graphql.datocms.com', {
    key,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.GRAPHQL_TOKEN}`
    },
    body: {
      query,
      variables
    },
    transform: ({ data, errors }) => {
      if (errors) throw errors
      return data
    }
  })
}
