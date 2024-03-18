export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deDataProtection(locale: ${locale}) {
      title
      text
    }
  }`
    : `query {
    dataProtection(locale: ${locale}) {
      title
      text
    }
  }`
}
