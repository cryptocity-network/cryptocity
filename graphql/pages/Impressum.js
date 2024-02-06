export default (locale) => {
  return `query {
    impressum(locale: ${locale}) {
      title
      text
      assets {
        alt
        url
        id
      }
    }
  }`
}
