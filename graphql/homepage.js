// import { useRuntimeConfig, useFetch } from 'nuxt/app'
export default (domainId) => {
  return `query {
    homepage(filter: {site: {eq: "${domainId}"}}) {
      herosection {
        _modelApiKey
        label
        link
        linkLabel
        headline
        subline
        image {
          url
        }
      }
      cardCarousel {
        _modelApiKey
        id
        cards {
          id
          name
          image {
            url
            title
            alt
          }
        }
      }
      contactsection {
        _modelApiKey
        id
        label
        link
        linkLabel
        headline
        subline
        image {
          url
        }
      }
    }
  }`
}
