import type { StructuredTextDocument } from 'vue-datocms'

export interface NewsItem {
    id: string,
    _seoMetaTags: Array<SeoMetaTag>,
    title: string
    subtitle: string
    content: StructuredTextDocument
    coverImage: object
    excerpt: string
    embedVideo: Boolean
    externalArticleUrl: string
    slug: string
    linkToExternalNewsArticle: boolean
    _createdAt: string
    _locales: Array<string>
}
