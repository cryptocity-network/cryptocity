export default (query) => {
  const runtimeConfig = useRuntimeConfig()
  const key = JSON.stringify(query)
  return useFetch('https://graphql.datocms.com', {
    key,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.GRAPHQL_TOKEN}`,
      'X-Environment': runtimeConfig.public.DATO_ENVIRONMENT || 'main'
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
