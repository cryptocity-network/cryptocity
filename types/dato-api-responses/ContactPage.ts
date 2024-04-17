export interface SeoTags {
    attributes: {
      property: string,
      name: string,
      content: string
    },
    content: Array<string>,
    tag: Array<string>,
  }

export interface ContactPage {
    contactPage: {
      _seoMetaTags: Array<SeoTags>,
      header: string,
      subline: string,
      formUrl: string
    }
  }
