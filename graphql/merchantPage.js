export default (countryId, locale) => {
  return `query {
    merchantPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
      herosection {
        subline
        linkLabel
        link
        label
        image {
          url
          alt
        }
        id
        headline
        _modelApiKey
      }
      tiltVideo {
        id
        _modelApiKey
        headline
        youtubeVideoLink
        thumbnail {
          url
          alt
        }
      }
      consultationHero {
        subline
        linkLabel
        link
        label
        image {
          url
          alt
        }
        id
        headline
        _modelApiKey
      }
      zigZagContent {
        id
        _modelApiKey
        blocks {
          secondaryButtonLink
          secondaryButtonLabel
          youtubeLink
          logo {
            alt
            url
          }
          label
          image {
            url
            alt
          }
          headline
          description
          buttonLink
          buttonLabel
          badge
        }
      }
      whyCrypto {
        id
        _modelApiKey
        headline
        subline
        linkLabel
        link
        label
        image {
          alt
          url
        }
      }
      grid {
        gridItems {
          id
          headline
          subline
          icon {
            alt
            url
          }
        }
        _modelApiKey
        id
      }
    }
  }`
}
