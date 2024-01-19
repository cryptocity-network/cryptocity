export default (countryId, locale) => {
  // locale: de
  return `query {
    homePage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
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
