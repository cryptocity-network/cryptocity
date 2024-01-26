export default (locale) => {
  return `query {
    dataProtection(locale: ${locale}) {
      title
      text
    }
  }`
}
