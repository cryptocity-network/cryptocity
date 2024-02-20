import CitiesGrid from '../blocks/CitiesGrid'
import HeroSection from '../blocks/HeroSection'
import Headline from '../blocks/Headline'

export default (regionId, locale) => {
  return `query {
    homePage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
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
