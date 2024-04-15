export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deCookie(locale: ${locale}) {
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
    cookie(locale: ${locale}) {
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
