import EventsCarousel from '../blocks/EventsCarousel'
import Grid from '../blocks/Grid'
import HeroSection from '../blocks/HeroSection'
import TiltedVideo from '../blocks/TiltedVideo'
import ZigZagContent from '../blocks/ZigZagContent'
import Headline from '../blocks/Headline'
import PaymentTable from '../blocks/PaymentTable'

export default (locale) => {
  return `query {
    merchantPage(filter: {region: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale}) {
      backgroundColors
      _seoMetaTags {
        attributes
        content
        tag
      }
      herosection {
        ${HeroSection()}
      }
      paymentTable {
        ${PaymentTable()}
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
      eventsHeadline {
        ${Headline()}
      }
      events {
        ${EventsCarousel()}
      }
      contactHeadline {
        ${Headline()}
      }
    }
  }`
}
