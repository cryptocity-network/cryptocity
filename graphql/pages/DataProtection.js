export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deDataProtection(locale: ${locale}) {
      title
      text
      content {
        value
        links {
          ... on CookieRecord {
            id
            _modelApiKey
          }
          ... on DeCookieRecord {
            id
            _modelApiKey
          }
          ... on DataProtectionRecord {
            id
            _modelApiKey
          }
          ... on DeDataProtectionRecord {
            id
            _modelApiKey
          }
          ... on HaftungsausschlussRecord {
            id
            _modelApiKey
          }
        }
        blocks
      }
    }
  }`
    : `query {
    dataProtection(locale: ${locale}) {
      title
      text
      content {
        value
        links {
          ... on CookieRecord {
            id
            _modelApiKey
          }
          ... on DeCookieRecord {
            id
            _modelApiKey
          }
          ... on DataProtectionRecord {
            id
            _modelApiKey
          }
          ... on DeDataProtectionRecord {
            id
            _modelApiKey
          }
          ... on HaftungsausschlussRecord {
            id
            _modelApiKey
          }
        }
        blocks
      }
    }
  }`
}
