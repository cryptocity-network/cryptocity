import CitiesGrid from '../blocks/CitiesGrid'
import HeroSection from '../blocks/HeroSection'
import Headline from '../blocks/Headline'

export default (locale) => {
  return `query {
    homePage(filter: {region: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale}) {
      backgroundColors
      _seoMetaTags {
        attributes
        content
        tag
      }
      herosection {
        ${HeroSection()}
      }
      citiesGrid {
        ${CitiesGrid()}
      }
      contactHeadline {
        ${Headline()}
      }
    }
  }
  `
}
