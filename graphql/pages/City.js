import HeroSection from '../blocks/HeroSection'
import CityGrid from '../blocks/CityGrid'
import PartnerLogos from '../blocks/PartnerLogos'
import EventsCarousel from '../blocks/EventsCarousel'
import Iframe from '../blocks/Iframe'
import Headline from '../blocks/Headline'
import StartingGrid from '../blocks/StartingGrid'

export default (cityName, locale) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}, locale: ${locale}, fallbackLocales:[en]) {
      id
      backgroundColors
      heroSection {
        ${HeroSection()}
      }
      startingGrid {
        ${StartingGrid()}
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
