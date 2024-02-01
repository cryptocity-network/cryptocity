import CitiesGrid from './blocks/CitiesGrid'
import HeroSection from './blocks/HeroSection'

export default (regionId, locale) => {
  return `query {
    homePage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
      citiesGrid {
        ${CitiesGrid()}
      }
      contactsection {
        ${HeroSection()}
      }
    }
  }
  `
}
