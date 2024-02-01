export default (locale) => {
  return `query {
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
