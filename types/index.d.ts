export interface Component {
    id: string,
    _modelApiKey: string,
}
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
export interface CityData {
    city: City
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
  interface SocialLinks {
    role: string,
    name: string,
    email: string,
    telegram: string,
    linkedin: string,
    image: Object,
    logo: Object
  }
  interface Page {
    id?: string;
    backgroundColors: Array,
    _modelApiKey: string;
    navigationLabel: string;
    slug: string;
    b
  }
  interface Region {
    id?: string,
    _locales: [string],
    brandName: string,
    url: string,
    mainImage: {
      url: string
    },
    _allReferencingCities: [
      {
        name: string
      }
    ],
    _allReferencingHomePages: [{
      id?: string
    }],
    _allReferencingMerchantPages: [{
      id?: string
    }],
    _allReferencingBeginnerPages: [{
      id?: string
    }],
    _allReferencingAboutPages: [{
      id?: string
    }],
    _allReferencingContactPages: [{
      id?: string,
      header: string,
      subline: string,
      formUrl: string
    }]
    partners?: Array<Partner>,
    socialLinks?: SocialLinks,
    pages: Array<Page>
  }
  interface Localization {
    siteLocales: Array<string> | undefined,
    userSelectedLocale: string | undefined
  }
  interface Global {
    tagLine: string | undefined
  }
  interface DatoGlobalResponse {
    global: Global
  }
  interface DatoRegionResponse {
    region: Region
  }