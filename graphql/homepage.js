import CitiesCarousel from './blocks/CitiesCarousel'
import HeroSection from './blocks/HeroSection'

export default (countryId, locale) => {
  return `query {
    homePage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
      citiesCarousel {
        ${CitiesCarousel()}
      }
      contactsection {
        ${HeroSection()}
      }
    }
  }
  `
}
