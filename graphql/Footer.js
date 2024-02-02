export default (locale) => {
  return `query {
    footer(locale: ${locale}) {
      title
      legal
      copyrightText
      wpig {
        value
        blocks
        links
      }
      cookies
      dataProtection
      privacy
      imprint
    }
  }`
}
