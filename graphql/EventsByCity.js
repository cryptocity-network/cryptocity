import ResponsiveImage from './ResponsiveImage'

export default (cityId) => {
  return `query {
  allEvents(filter: {locationCity: {eq: "${cityId}"}}, fallbackLocales:[en]) {
    id
    title
    start
    locationCity {
      name
    }
    image {
      ${ResponsiveImage()}
    }
    end
    description
    link
    linkLabel
  }
}  `
}
