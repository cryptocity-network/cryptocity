export default (countryId) => {
  return `query {
    beginnerPage(filter: {site: {eq: "${countryId}"}}) {
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
