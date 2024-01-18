// import { useRuntimeConfig, useFetch } from 'nuxt/app'
export default (countryId) => {
  return `query {
    merchantPage(filter: {site: {eq: "${countryId}"}}) {
      herosection {
        subline
        linkLabel
        link
        label
        image {
          url
        }
        id
        headline
        _modelApiKey
      }
    }
  }`
}
