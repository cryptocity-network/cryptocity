import HeroSection from '../blocks/HeroSection'
import PartnerGrid from '../blocks/PartnerGrid'
import Headline from '../blocks/Headline'

export default (regionId, locale) => {
  return `query {
    networkPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      backgroundColors
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
