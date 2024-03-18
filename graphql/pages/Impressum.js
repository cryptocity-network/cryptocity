import ResponsiveImage from '../ResponsiveImage'

export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deImpressum(locale: ${locale}) {
      title
      text
      assets {
        ${ResponsiveImage()}
        id
      }
    }
  }`
    : `query {
    impressum(locale: ${locale}) {
      title
      text
      assets {
        ${ResponsiveImage()}
        id
      }
    }
  }`
}
