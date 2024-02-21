export default () => {
  return `
  url
  alt
  responsiveImage(imgixParams: { fit: max, h: 540, auto: format }) {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }`
}
