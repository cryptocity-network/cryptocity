export default (regionId, locale) => {
  return `query {
    allCities(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      name
      mainImage {
        url
        alt
      }
      id
    }
  }`
}
