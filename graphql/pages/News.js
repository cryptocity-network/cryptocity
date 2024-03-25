import ResponsiveImage from '../ResponsiveImage'
export default (slug, locale) => {
  return `query {
    news(filter: {slug: {eq: "${slug}"}}, locale: ${locale}) {
      id
      _seoMetaTags {
        attributes
        content
        tag
      }

      title
      _createdAt
      coverImage {
        ${ResponsiveImage()}
      }
      excerpt
      content {
        blocks
        value
        links
      }
      embedVideo
      externalArticleUrl
      slug
      linkToExternalNewsArticle
    }
  }`
}
// cryptoMapHeadline {
//   ${Headline()}
// }
