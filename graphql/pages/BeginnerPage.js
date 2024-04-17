import Grid from '../blocks/Grid'
import HalfImageHero from '../blocks/HalfImageHero'
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
      halfImageHero {
        ${HalfImageHero()}
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
