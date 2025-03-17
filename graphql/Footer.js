export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deFooter(locale: ${locale}) {
      title
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
    footerLogoList {
      footerLogos {
        url
        id
        brandName
        brandIntellectualPropertySymbols
      }
    }
  }`
    : `query {
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
    footerLogoList {
      footerLogos {
        url
        id
        brandName
        brandIntellectualPropertySymbols
      }
    }
  }`
}
