export default (locale) => {
  return `query {
    footer(locale: ${locale}) {
      title
      legal
      copyrightText
    }
  }`
}
