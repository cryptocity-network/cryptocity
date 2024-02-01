import EventsCarousel from './blocks/EventsCarousel'
import Grid from './blocks/Grid'
import HeroSection from './blocks/HeroSection'
import TiltedVideo from './blocks/TiltedVideo'
import ZigZagContent from './blocks/ZigZagContent'

export default (regionId, locale) => {
  return `query {
    merchantPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
      tiltVideo {
        ${TiltedVideo()}
      }
      consultationHero {
        ${HeroSection()}
      }
      zigZagContent {
        ${ZigZagContent()}
      }
      whyCrypto {
        ${HeroSection()}
      }
      grid {
        ${Grid()}
      }
      whyCrypto {
        ${HeroSection()}
      }
      eventsHero {
        ${HeroSection()}
      }
      events {
        ${EventsCarousel()}
      }
    }
  }`
}
