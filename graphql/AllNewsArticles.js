import ResponsiveImage from './ResponsiveImage'
export default (locale) => {
  return `query {
    allNews(
      filter: {OR: [
        {isItGlobalNews: {eq: "true"}}
        {relatesTo: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}
      ]}
      locale: ${locale}
      fallbackLocales: [en, ${useRuntimeConfig().public.DATO_DEFAULT_LOCALE}, es, de]
    ) {
      id
      title
      excerpt
      _createdAt
      embedVideo
      externalArticleUrl
      slug
      linkToExternalNewsArticle
      coverImage {
        ${ResponsiveImage()}
      }
      _locales
    }
  }`
}
