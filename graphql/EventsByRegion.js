// import ResponsiveImage from './ResponsiveImage'

import ResponsiveImage from './ResponsiveImage'

export default (regionId, locale) => {
  return `query {
  allEvents(
    filter: {
      OR: [
        {locationRegion: {eq: "${regionId}"}},
        {isItGlobalNews: {eq: true}}
      ]
    }
    orderBy: start_ASC
    locale: ${locale}
    fallbackLocales: [en]
  ) {
    id
    title
    isItGlobalNews
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
