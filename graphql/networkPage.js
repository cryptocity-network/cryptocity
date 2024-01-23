export default (countryId, locale) => {
  return `query {
    networkPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
      herosection {
        subline
        linkLabel
        link
        label
        image {
          url
        }
        id
        headline
        _modelApiKey
      }
      partners {
        id
        _modelApiKey
        grid {
          youtube
          whatsapp
          twitter
          telegram
          logo {
            url
            alt
          }
          linkedIn
          linkUrl
          linkLabel
          label
          instagram
          id
          headlineLogo {
            url
            alt
          }
          headline
          facebook
          email
          discord
          description {
            value
          }
          badge
        }
      }
    }
  }`
}
