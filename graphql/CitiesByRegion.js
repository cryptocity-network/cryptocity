export default (regionId, locale) => {
  return `query {
    allCities(
      filter: {region: {eq: "${regionId}"}, state: {eq: "Live"}, _status: {eq: published}}, locale: ${locale}) {
      name
      mainImage {
        url
        alt
      }
      id
    }
  }`
}
