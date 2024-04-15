import StructuredContentWithLinks from '../blocks/StructuredContentWithLinks'

export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deHaftungsausschluss(locale: ${locale}) {
      title
      content{
        ${StructuredContentWithLinks()}
      }
    }
  }`
    : `query {
    haftungsausschluss(locale: ${locale}) {
      title
      content{
        ${StructuredContentWithLinks()}
      }
    }
  }`
}
