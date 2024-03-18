export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deCookie(locale: ${locale}) {
      title
      text
    }
  }`
    : `query {
    cookie(locale: ${locale}) {
      title
      text
    }
  }`
}
