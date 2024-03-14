import type { StructuredTextDocument } from 'vue-datocms'

export interface NewsItem {
    id: string,
    _seoMetaTags: Array<SeoMetaTag>,
    title: string
    content: StructuredTextDocument
}
