import StructuredContentWithLinks from '../blocks/StructuredContentWithLinks'
import DeStructuredContentWithLinks from '../blocks/DeStructuredContentWithLinks'
export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deHaftungsausschluss(locale: ${locale}) {
      title
      content{
        ${DeStructuredContentWithLinks()}
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
