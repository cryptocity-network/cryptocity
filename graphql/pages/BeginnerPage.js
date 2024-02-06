import Grid from '../blocks/Grid'
import HalfImageHero from '../blocks/HalfImageHero'
import MediaCarousel from '../blocks/MediaCarousel'
import ZigZagContent from '../blocks/ZigZagContent'
import Headline from '../blocks/Headline'

export default (regionId, locale) => {
  return `query {
    beginnerPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      backgroundColors
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
    }
  }`
}
