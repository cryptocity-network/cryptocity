import StructuredContentWithLinks from '../blocks/StructuredContentWithLinks'

export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deDataProtection(locale: ${locale}) {
      title
      content {
        ${StructuredContentWithLinks()}
      }
    }
  }`
    : `query {
    dataProtection(locale: ${locale}) {
      title
      content {
        ${StructuredContentWithLinks()}
      }
    }
  }`
}
