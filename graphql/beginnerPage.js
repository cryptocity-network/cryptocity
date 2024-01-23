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
    }
  }`
}
