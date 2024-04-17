import HeroSection from '../blocks/HeroSection'
import Headline from '../blocks/Headline'
import NewsList from '../blocks/NewsList'

export default (locale) => {
  return `query {
    newsPage(filter: {region: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale}) {
      backgroundColors
      _seoMetaTags {
        attributes
        content
        tag
      }
      herosection {
        ${HeroSection()}
      }
      featured {
        id
      }
      newsList {
        ${NewsList()}
      }
      contactHeadline {
        ${Headline()}
      }
    }
  }`
}
