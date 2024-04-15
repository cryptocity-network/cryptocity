import ResponsiveImage from '../ResponsiveImage'
import StructuredContentWithLinks from '../blocks/StructuredContentWithLinks'
export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deImpressum(locale: ${locale}) {
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
