interface City {
  id: string,
  backgroundColors: Object,
  heroSection: Object,
  startingGrid: Object,
  partnersHeadline: Object,
  partnerLogos: Object,
  missionHeadline: Object,
  cityGrid: Object,
  cryptoMapHeadline: Object,
  iframe: Object,
  eventsHeadline: Object,
  eventsCarousel: Object
}

interface Partner {
  badge: string,
  companyName: string,
  description: string,
  label: string,
  linkLabel: string,
  linkUrl: string,
  logo: {
    url: string,
    alt: string,
  }
  socials: {
    youtube: string
    whatsapp: string
    twitter: string
    telegram: string
    linkedIn: string
    instagram: string
    facebook: string
    email: string
    discord: string
  }
}
interface Component {
  id: string,
  _modelApiKey: string,
}
interface SocialLinks {
  role: string,
  name: string,
  email: string,
  telegram: string,
  linkedin: string,
  image: Object,
  logo: Object
}
interface Localization {
  siteLocales: Array<string> | undefined,
  userSelectedLocale: string | undefined
}