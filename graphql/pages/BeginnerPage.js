import Grid from '../blocks/Grid'
import HeroSection from '../blocks/HeroSection'
import CoinCards from '../blocks/CoinCards'
import MediaCarousel from '../blocks/MediaCarousel'
import ZigZagContent from '../blocks/ZigZagContent'
import Headline from '../blocks/Headline'

export default (locale) => {
  return `query {
    beginnerPage(filter: {region: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale}) {
      backgroundColors
      _seoMetaTags {
        attributes
        content
        tag
      }
      hero {
        ${HeroSection()}
      }
      coinCards {
        ${CoinCards()}
      }
      carouselHeadline {
        ${Headline()}
      }
      mediaCarousel {
        ${MediaCarousel()}
      }
      zigZagContent {
        ${ZigZagContent()}
      }
      knowledge {
        ${Headline()}
      }
      grid {
        ${Grid()}
      }
      contactHeadline {
        ${Headline()}
      }
    }
  }`
}
