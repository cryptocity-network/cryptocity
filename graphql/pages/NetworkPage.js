import HeroSection from '../blocks/HeroSection'
import PartnerGrid from '../blocks/PartnerGrid'
import Headline from '../blocks/Headline'

export default (regionId, locale) => {
  return `query {
    networkPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      backgroundColors
      _seoMetaTags {
        attributes
        content
        tag
      }
      herosection {
        ${HeroSection()}
      }
      partners {
        ${PartnerGrid()}
      }
      contactHeadline {
        ${Headline()}
      }
    }
  }`
}
