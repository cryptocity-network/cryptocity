import EventsCarousel from './blocks/EventsCarousel'
import Grid from './blocks/Grid'
import HeroSection from './blocks/HeroSection'
import TiltedVideo from './blocks/TiltedVideo'
import ZigZagContent from './blocks/ZigZagContent'
import Headline from './blocks/Headline'

export default (regionId, locale) => {
  return `query {
    merchantPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
      tiltVideo {
        ${TiltedVideo()}
      }
      consultationHeadline {
        ${Headline()}
      }
      zigZagContent {
        ${ZigZagContent()}
      }
      whyCrypto {
        ${Headline()}
      }
      grid {
        ${Grid()}
      }
      whyCrypto {
        ${Headline()}
      }
      eventsHeadline {
        ${Headline()}
      }
      events {
        ${EventsCarousel()}
      }
    }
  }`
}
