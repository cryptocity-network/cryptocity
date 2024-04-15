import StructuredContentWithLinks from '../blocks/StructuredContentWithLinks'

export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deCookie(locale: ${locale}) {
      title
      content {
        ${StructuredContentWithLinks()}
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
