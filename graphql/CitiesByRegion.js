import ResponsiveImage from './ResponsiveImage'

export default (regionId, locale) => {
  return `query {
    allCities(
      filter: {region: {eq: "${regionId}"}} locale: ${locale}) {
      name
      slug
      state
      mainImage {
        ${ResponsiveImage()}
      }
      id
    }
  }`
}
