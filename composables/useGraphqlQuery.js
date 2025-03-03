import { buildRequestInit } from '@datocms/cda-client'

export default (query, options) => {
  const optionsWithToken = {
    ...options,
    token: useRuntimeConfig().public.DATO_TOKEN
  }

  return useFetch('https://graphql.datocms.com/', {
    ...buildRequestInit(query, optionsWithToken),
    key: JSON.stringify([query, optionsWithToken]),
    transform: ({ data, errors }) => {
      if (errors) {
        throw new Error(
          `Something went wrong while executing the query: ${JSON.stringify(errors)}`
        )
      }

      return data
    }
  })
}

export function OldUseQuery (query) {
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
      Authorization: `Bearer ${runtimeConfig.public.DATO_TOKEN}`,
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
