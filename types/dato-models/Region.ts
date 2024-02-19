import type { Page } from '@/types/dato-models/Page'
import type { Partner } from '@/types/dato-models/Partner'
export interface Region {
    id?: string,
    _locales: [string],
    brandName: string,
    url: string,
    state: string,
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
