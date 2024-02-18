export default (regionId, locale) => {
  return `query {
    allCities(
      filter: {region: {eq: "${regionId}"}} locale: ${locale}) {
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
