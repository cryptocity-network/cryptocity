export default (regionId, locale) => {
  return `query {
    contactPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      header
      subline
      formUrl
    }
  }`
}
