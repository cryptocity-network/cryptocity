export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deFooter(locale: ${locale}) {
      title
      acceptedCryptoText
      legal
      copyrightText
      wpig {
        value
        blocks
        links
      }
      haftungsausschluss
      cookies
      dataProtection
      privacy
      imprint
    }
  }`
    : `query {
    footer(locale: ${locale}) {
      title
      acceptedCryptoText
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
