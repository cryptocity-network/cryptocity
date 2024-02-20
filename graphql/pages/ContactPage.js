export default (regionId, locale) => {
  return `query {
    contactPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      _seoMetaTags {
        attributes
        content
        tag
      }
      header
      subline
      formUrl
    }
  }`
}
