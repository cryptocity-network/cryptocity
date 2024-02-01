import Grid from './blocks/Grid'
import HalfImageHero from './blocks/HalfImageHero'
import HeroSection from './blocks/HeroSection'
import MediaCarousel from './blocks/MediaCarousel'
import ZigZagContent from './blocks/ZigZagContent'

export default (regionId, locale) => {
  return `query {
    beginnerPage(filter: {region: {eq: "${regionId}"}}, locale: ${locale}) {
      halfImageHero {
        ${HalfImageHero()}
      }
      carouselHero {
        ${HeroSection()}
      }
      mediaCarousel {
        ${MediaCarousel()}
      }
      zigZagContent {
        ${ZigZagContent()}
      }
      knowledge {
        ${HeroSection()}
      }
      grid {
        ${Grid()}
      }
    }
  }`
}
