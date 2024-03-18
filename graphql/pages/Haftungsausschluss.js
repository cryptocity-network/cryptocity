export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deHaftungsausschluss(locale: ${locale}) {
      title
      content{
        value
        links
        blocks
      }
    }
  }`
    : `query {
    haftungsausschluss(locale: ${locale}) {
      title
      content{
        value
        links
        blocks
      }
    }
  }`
}
