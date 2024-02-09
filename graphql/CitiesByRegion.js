export default (regionId, locale) => {
  return `query {
    allCities(
      filter: {region: {eq: "${regionId}"}, _status: {eq: published}}, locale: ${locale}) {
      name
      state
      mainImage {
        url
        alt
      }
      id
    }
  }`
}
