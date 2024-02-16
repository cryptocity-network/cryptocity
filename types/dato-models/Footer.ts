import type { StructuredTextDocument } from 'vue-datocms'

export interface Footer {
    wpig: StructuredTextDocument,
    legal: string,
    dataProtection: string,
    cookies: string,
    imprint: string,
    privacy: string,
    copyrightText: string
}
