export default (cityName, locale) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}, locale: ${locale}) {
      heroSection {
        subline
        linkLabel
        link
        label
        image {
          url
        }
        headline
        _modelApiKey
      }
    }
  }`
}
