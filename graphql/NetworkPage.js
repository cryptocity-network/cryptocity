import HeroSection from './blocks/HeroSection'
import PartnerGrid from './blocks/PartnerGrid'

export default (regionId, locale) => {
  return `query {
    networkPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
      partners {
        ${PartnerGrid()}
      }
    }
  }`
}
