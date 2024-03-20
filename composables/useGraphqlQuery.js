export default (query) => {
  const runtimeConfig = useRuntimeConfig()
  const key = JSON.stringify(query)
  const datoApiUrl = 'https://graphql.datocms.com'
  let isPreviewEnvironment = false
  if (process.client) {
    isPreviewEnvironment = localStorage?.getItem('preview')
  } else {
    isPreviewEnvironment = false
  }
  return useFetch(datoApiUrl, {
    key,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${runtimeConfig.DATO_TOKEN}`,
      'X-environment': 'main',
      ...(isPreviewEnvironment && { 'X-include-drafts': true })
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
