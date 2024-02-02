import AllCitiesCarousel from './blocks/AllCitiesCarousel'
import HeroSection from './blocks/HeroSection'
import Image from './blocks/Image'
import ZigZagContent from './blocks/ZigZagContent'
import Headline from './blocks/Headline'

export default (regionId, locale) => {
  return `query {
    aboutPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
      image {
        ${Image()}
      }
      subHeadline {
        ${Headline()}
      }
      aboutZigZag {
        ${ZigZagContent()}
      }
      carouselHeadline {
        ${Headline()}
      }
      allCitiesCarousel {
        ${AllCitiesCarousel()}
      }
      contactHeadline {
        ${Headline()}
      }
    }
  }`
}
