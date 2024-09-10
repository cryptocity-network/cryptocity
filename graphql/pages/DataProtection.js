import StructuredContentWithLinks from '../blocks/StructuredContentWithLinks'
import DeStructuredContentWithLinks from '../blocks/DeStructuredContentWithLinks'

export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deDataProtection(locale: ${locale}) {
      title
      content {
        ${DeStructuredContentWithLinks()}
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
