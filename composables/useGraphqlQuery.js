export default (query) => {
  const runtimeConfig = useRuntimeConfig()
  const key = JSON.stringify(query)
  let datoApiUrl = 'https://graphql.datocms.com'
  if (runtimeConfig.public.DATO_DRAFT_PREVIEW) {
    datoApiUrl = datoApiUrl + '/preview'
  }
  return useFetch(datoApiUrl, {
    key,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${runtimeConfig.public.DATO_TOKEN}`
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
