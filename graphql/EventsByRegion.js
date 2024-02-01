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
