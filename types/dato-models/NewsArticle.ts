export interface NewsArticle {
    id: string,
    _seoMetaTags: Array<SeoMetaTag>,
    backgroundColors: Object,
    title: string
    _createdAt: string
    coverImage: object
    excerpt: string
    content: object
    embedVideo: Boolean
    externalArticleUrl: string
    slug: string
    linkToExternalNewsArticle: boolean
}
