// import ResponsiveImage from './ResponsiveImage'

import ResponsiveImage from './ResponsiveImage'

export default (regionId) => {
  return `query {
  allEvents(filter: {locationRegion: {eq: "${regionId}"}}, fallbackLocales:[en]) {
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
