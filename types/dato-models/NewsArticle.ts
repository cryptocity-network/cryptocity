export interface NewsArticle {
    id: string,
    _seoMetaTags: Array<SeoMetaTag>,
    backgroundColors: Object,
    title: string
    coverImage: object
    excerpt: string
    embedVideo: Boolean
    countries: Array<string>,
    externalArticleUrl: string
    slug: string
    linkToExternalNewsArticle: boolean
    _createdAt: string
    _locales: Array<string>
}
