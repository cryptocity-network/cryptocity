// import { useRuntimeConfig, useFetch } from 'nuxt/app'
export default (countryId) => {
  return `query {
    homePage(filter: {site: {eq: "${countryId}"}}) {
      herosection {
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
      citiesCarousel {
        _modelApiKey
        id
        cities {
          name
          mainImage {
            url
            alt
          }
          id
          heroSection {
            subline
            linkLabel
            link
            label
            image {
              url
            }
            id
            headline
          }
          gallery {
            url
            alt
          }
          country {
            name
            id
          }
        }
      }
      contactsection {
        _modelApiKey
        id
        label
        link
        linkLabel
        subline
        headline
        image {
          url
        }
      }
    }
  }
  `
}
