export default (countryId, locale) => {
  return `query {
    beginnerPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
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
