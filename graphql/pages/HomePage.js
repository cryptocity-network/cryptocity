import CitiesGrid from '../blocks/CitiesGrid'
import HeroSection from '../blocks/HeroSection'
import Headline from '../blocks/Headline'

export default (regionId, locale) => {
  return `query {
    homePage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      backgroundColors
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
