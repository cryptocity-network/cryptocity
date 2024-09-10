import StructuredContentWithLinks from '../blocks/StructuredContentWithLinks'
import DeStructuredContentWithLinks from '../blocks/DeStructuredContentWithLinks'
export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deCookie(locale: ${locale}) {
      title
      content {
        ${DeStructuredContentWithLinks()}
      }
    }
  }`
    : `query {
    cookie(locale: ${locale}) {
      title
      content {
        ${StructuredContentWithLinks()}
      }
    }
  }`
}
