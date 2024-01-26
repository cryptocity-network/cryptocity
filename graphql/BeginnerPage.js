import Grid from './blocks/Grid'
import HalfImageHero from './blocks/HalfImageHero'
import HeroSection from './blocks/HeroSection'
import MediaCarousel from './blocks/MediaCarousel'
import ZigZagContent from './blocks/ZigZagContent'

export default (countryId, locale) => {
  return `query {
    beginnerPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
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
