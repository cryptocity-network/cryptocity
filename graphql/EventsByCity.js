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
      alt
      url
    }
    end
    description
    link
    linkLabel
  }
}  `
}
