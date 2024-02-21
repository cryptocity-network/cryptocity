import ResponsiveImage from './ResponsiveImage'
export default (locale) => {
  return `query {
    allCities(locale: ${locale}, fallbackLocales:[en]) {
      id
      name
      state
      mainImage {
        ${ResponsiveImage()}
      }
      region {
        url
        brandName
      }
    }
  }`
}
