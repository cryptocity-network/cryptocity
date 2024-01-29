export default (countryId) => {
  return `query {
  allEvents(filter: {locationCountry: {eq: "${countryId}"}}, fallbackLocales:[en]) {
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
