export default (cityName, locale) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}, locale: ${locale}) {
      name
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
