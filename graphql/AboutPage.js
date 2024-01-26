import AllCitiesCarousel from './blocks/AllCitiesCarousel'
import HeroSection from './blocks/HeroSection'
import Image from './blocks/Image'
import ZigZagContent from './blocks/ZigZagContent'
export default (countryId, locale) => {
  return `query {
    aboutPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
      image {
        ${Image()}
      }
      subHero {
        ${HeroSection()}
      }
      aboutZigZag {
        ${ZigZagContent()}
      }
      carouselHero {
        ${HeroSection()}
      }
      allCitiesCarousel {
        ${AllCitiesCarousel()}
      }
      contactHero {
        ${HeroSection()}
      }
    }
  }`
}