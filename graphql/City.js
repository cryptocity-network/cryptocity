import HeroSection from './blocks/HeroSection'
import CityGrid from './blocks/CityGrid'
import PartnerLogos from './blocks/PartnerLogos'
import EventsCarousel from './blocks/EventsCarousel'
import Iframe from './blocks/Iframe'

export default (cityName, locale) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}, locale: ${locale}, fallbackLocales:[en]) {
      id
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
      cryptoMapHero {
        ${HeroSection()}
      }
      iframe {
        ${Iframe()}
      }
      eventsHero {
        ${HeroSection()}
      }
      eventsCarousel {
        ${EventsCarousel()}
      }
    }
  }`
}
