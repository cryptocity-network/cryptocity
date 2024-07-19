import EventsCarousel from '../blocks/EventsCarousel'
import Grid from '../blocks/Grid'
import HeroSection from '../blocks/HeroSection'
import ZigZagContent from '../blocks/ZigZagContent'
import Headline from '../blocks/Headline'
import PaymentTable from '../blocks/PaymentTable'
import ResponsiveImage from '../ResponsiveImage'

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
      youtubeHeadline {
        ${Headline()}
      }
      youtubeCarousel {
        videos {
          id
          url
          descriptionText
          thumbnail {
            ${ResponsiveImage()}
          }
        }
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
