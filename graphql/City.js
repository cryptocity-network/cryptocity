import HeroSection from './blocks/HeroSection'
import CityGrid from './blocks/CityGrid'
import PartnerLogos from './blocks/PartnerLogos'

export default (cityName, locale) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}, locale: ${locale}, fallbackLocales:[en]) {
      heroSection {
        ${HeroSection()}
      }
      partnersHero {
        ${HeroSection()}
      }
      partnerLogos {
        ${PartnerLogos()}
      }
      missionHero {
        ${HeroSection()}
      }
      cityGrid {
        ${CityGrid()}
      }
    }
  }`
}
