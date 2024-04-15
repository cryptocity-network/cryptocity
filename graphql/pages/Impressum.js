import ResponsiveImage from '../ResponsiveImage'

export default (locale) => {
  return checkGermanyOrRestOfWorld()
    ? `query {
    deImpressum(locale: ${locale}) {
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
      assets {
        ${ResponsiveImage()}
        id
      }
    }
  }`
    : `query {
    impressum(locale: ${locale}) {
      title
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
      text
      assets {
        ${ResponsiveImage()}
        id
      }
    }
  }`
}
