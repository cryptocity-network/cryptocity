import HeroSection from './blocks/HeroSection'
export default (countryId, locale) => {
  return `query {
    aboutPage(filter: {site: {eq: "${countryId}"}}, locale: ${locale}) {
      herosection {
        ${HeroSection()}
      }
    }
  }`
}
