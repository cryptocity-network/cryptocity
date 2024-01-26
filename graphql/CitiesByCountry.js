export default (countryId, locale) => {
  return `query {
    allCities(filter: {country: {eq: "${countryId}"}}, locale: ${locale}) {
      name
      mainImage {
        url
        alt
      }
      id
    }
  }`
}
