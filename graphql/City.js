import HeroSection from './blocks/HeroSection'
import CityGrid from './blocks/CityGrid'
import PartnerLogos from './blocks/PartnerLogos'
import EventsCarousel from './blocks/EventsCarousel'
import Iframe from './blocks/Iframe'
import Headline from './blocks/Headline'

export default (cityName, locale) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}, locale: ${locale}, fallbackLocales:[en]) {
      id
      heroSection {
        ${HeroSection()}
      }
      partnersHeadline {
        ${Headline()}
      }
      partnerLogos {
        ${PartnerLogos()}
      }
      missionHeadline {
        ${Headline()}
      }
      cityGrid {
        ${CityGrid()}
      }
      cryptoMapHeadline {
        ${Headline()}
      }
      iframe {
        ${Iframe()}
      }
      eventsHeadline {
        ${Headline()}
      }
      eventsCarousel {
        ${EventsCarousel()}
      }
    }
  }`
}
