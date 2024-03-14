export default (slug, locale) => {
  return `query {
    news(filter: {slug: {eq: "${slug}"}}, locale: ${locale}, fallbackLocales:[en]) {
      id
      _seoMetaTags {
        attributes
        content
        tag
      }
      title
      content {
        value
        blocks
        links
      }
    }
  }`
}
// cryptoMapHeadline {
//   ${Headline()}
// }
