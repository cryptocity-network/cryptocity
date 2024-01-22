export default (countryId, locale) => {
  return `query {
    beginnerPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
      halfImageHero {
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
