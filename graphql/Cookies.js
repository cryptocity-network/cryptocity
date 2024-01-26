export default (locale) => {
  return `query {
    cookie(locale: ${locale}) {
      title
      text
    }
  }`
}
