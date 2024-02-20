export default (locale) => {
  return `query {
    allCities(locale: ${locale}, fallbackLocales:[en]) {
      id
      name
      state
      mainImage {
        url
        alt
      }
      region {
        url
        brandName
      }
    }
  }`
}
