export default (query) => {
  const runtimeConfig = useRuntimeConfig()
  const key = JSON.stringify(query)
  return useFetch('https://graphql.datocms.com', {
    key,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.DATO_TOKEN}`,
      'X-Include-Drafts': true
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
