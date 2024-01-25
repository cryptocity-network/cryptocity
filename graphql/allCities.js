export default (locale) => {
  return `query {
    allCities(locale: ${locale}) {
      name
      mainImage {
        url
        alt
      }
      id
    }
  }`
}
