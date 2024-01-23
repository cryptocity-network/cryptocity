export default (countryId, locale) => {
  return `query {
    beginnerPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
      halfImageHero {
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
      carouselHero {
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
      mediaCarousel {
        id
        _modelApiKey
        carousel {
          id
          _modelApiKey
          headline
          media {
            mimeType
            url
            video {
              streamingUrl
            }
            alt
          }
        }
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
      knowledge {
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
