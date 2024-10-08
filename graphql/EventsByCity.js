import ResponsiveImage from './ResponsiveImage'

export default (cityId, locale) => {
  return `query {
  allEvents(
    filter: {
      OR: [
        {locationCity: {eq: "${cityId}"}},
        {isItGlobalNews: {eq: true}}
      ]
    }
    locale: ${locale}
    fallbackLocales: [en]
  ) {
    id
    title
    start
    isItGlobalNews
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
