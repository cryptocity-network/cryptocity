import type { Page } from '@/types/dato-models/Page'
import type { Partner } from '@/types/dato-models/Partner'
import type { PaymentOption } from '@/types/dato-models/PaymentOption'

export interface Region {
    id?: string,
    _locales: [string],
    brandName: string,
    brandIntellectualPropertySymbols: string,
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
    }],
    partners?: Array<Partner>,
    socialLinks?: SocialLinks,
    pages: Array<Page>,
    paymentOptions: Array<PaymentOption>,
    supportedCryptocurrencies?: Array<{
        icon: {
            url: string
        },
        labelledIcon: {
            url: string
        },
        fullName: string,
        abbreviation: string
        benefits: [{
            description: string,
            icon: {
                url: string
            }
        }]
    }>
}
