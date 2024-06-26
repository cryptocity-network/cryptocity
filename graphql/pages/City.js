import HeroSection from '../blocks/HeroSection'
import CityGrid from '../blocks/CityGrid'
import PartnerLogos from '../blocks/PartnerLogos'
import EventsCarousel from '../blocks/EventsCarousel'
import Iframe from '../blocks/Iframe'
import Headline from '../blocks/Headline'
import StartingGrid from '../blocks/StartingGrid'
import MapBusiness from '../blocks/MapBusiness'
export default (cityName, locale) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}, state: {eq: "Live"}}, locale: ${locale}, fallbackLocales:[en]) {
      id
      _seoMetaTags {
        attributes
        content
        tag
      }
      backgroundColors
      heroSection {
        ${HeroSection()}
      }
      iframe {
        ${Iframe()}
      }
      mapBusinesses {
        ${MapBusiness()}
      }
      partnerLogos {
        ${PartnerLogos()}
      }
      eventsHeadline {
        ${Headline()}
      }
      eventsCarousel {
        ${EventsCarousel()}
      }
      startingGrid {
        ${StartingGrid()}
      }
      missionHeadline {
        ${Headline()}
      }
      cityGrid {
        ${CityGrid()}
      }
    }
  }`
}
// cryptoMapHeadline {
//   ${Headline()}
// }
