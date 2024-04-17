import HeroSection from '../blocks/HeroSection'
import PartnerGrid from '../blocks/PartnerGrid'
import Headline from '../blocks/Headline'

export default (locale) => {
  return `query {
    networkPage(filter: {region: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale}) {
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
