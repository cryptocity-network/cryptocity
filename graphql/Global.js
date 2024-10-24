export default () => {
  // seoTitle
  // seoDescription
  return `query {
    global(locale: ${useI18n().locale.value}) {
      tagLine
      contactButtonLabel
      formUrl
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }`
}
