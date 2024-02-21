import ResponsiveImage from '../ResponsiveImage'

export default (locale) => {
  return `query {
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
