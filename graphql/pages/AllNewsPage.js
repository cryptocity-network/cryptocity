import HeroSection from '../blocks/HeroSection'
import Headline from '../blocks/Headline'

export default (regionId, locale) => {
  return `query {
    newsPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      backgroundColors
      _seoMetaTags {
        attributes
        content
        tag
      }
      herosection {
        ${HeroSection()}
      }
      contactHeadline {
        ${Headline()}
      }
    }
  }`
}
