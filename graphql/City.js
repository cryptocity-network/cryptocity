import HeroSection from './blocks/HeroSection'

export default (cityName, locale) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}, locale: ${locale}, fallbackLocales:[en]) {
      heroSection {
        ${HeroSection()}
      }
      partnersHero {
        ${HeroSection()}
      }
    }
  }`
}
