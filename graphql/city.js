export default (cityName) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}) {
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
