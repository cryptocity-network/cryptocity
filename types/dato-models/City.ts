export interface City {
    id: string,
    name: string,
    slug: string,
    _seoMetaTags: Array<SeoMetaTag>,
    backgroundColors: Object,
    heroSection: Object,
    tv: Object,
    startingGrid: Object,
    partnersHeadline: Object,
    partnerLogos: Object,
    missionHeadline: Object,
    mapBusinesses: Object,
    cityGrid: Object,
    cryptoMapHeadline: Object,
    iframe: Object,
    eventsHeadline: Object,
    eventsCarousel: Object,
    region: {
        id: string
    }
}
