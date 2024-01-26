import HeroSection from './blocks/HeroSection'
import PartnerGrid from './blocks/PartnerGrid'

export default (countryId, locale) => {
  return `query {
    networkPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
      partners {
        ${PartnerGrid()}
      }
    }
  }`
}
