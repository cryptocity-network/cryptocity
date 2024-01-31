import CitiesGrid from './blocks/CitiesGrid'
import HeroSection from './blocks/HeroSection'

export default (countryId, locale) => {
  return `query {
    homePage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
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
