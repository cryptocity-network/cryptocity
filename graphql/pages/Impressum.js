import ResponsiveImage from '../ResponsiveImage'
import DeStructuredContentWithLinks from '../blocks/DeStructuredContentWithLinks'
export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deImpressum(locale: ${locale}) {
      title
      content {
        ${DeStructuredContentWithLinks()}
      }
      assets {
        ${ResponsiveImage()}
        id
      }
    }
  }`
    : `query {
    impressum(locale: ${locale}) {
      title
      content {
        ${StructuredContentWithLinks()}
      }
      assets {
        ${ResponsiveImage()}
        id
      }
    }
  }`
}
