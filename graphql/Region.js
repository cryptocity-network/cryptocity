import ResponsiveImage from './ResponsiveImage'

export function getRegionQuery (locale) {
  const pageFields = (navigationLabel = true) => `
        id
        _modelApiKey
        ${navigationLabel ? 'navigationLabel' : ''}
      `
  return `
  query {
        region(filter: {id: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale}) {
          id
          _locales
          brandName
          brandIntellectualPropertySymbols
          mainImage {
            url
            alt
          }
          _allReferencingHomePages {
            ${pageFields(false)}
          }
          _allReferencingMerchantPages {
            ${pageFields()}
          }
          _allReferencingBeginnerPages {
            ${pageFields()}
          }
          _allReferencingNetworkPages {
            ${pageFields()}
          }
          _allReferencingNewsPages {
            ${pageFields()}
          }
          _allReferencingAboutPages {
            ${pageFields()}
          }
          _allReferencingContactPages {
            ${pageFields()}
          }
          _allReferencingCities {
            name
          }
          paymentOptions {
            id
            fees
            acceptedCrypto
            logo {
              ${ResponsiveImage()}
            }
            nimiqPay
            payment
            releaseDate
          }
          supportedCryptocurrencies {
            icon {
              url
            }
            labelledIcon {
              url
            }
            fullName
            abbreviation
            benefits {
              description
              icon {
                url
              }
            }
          }
          partners {
            companyName
            description
            linkLabel
            linkUrl
            logo {
              url
              alt
            }
            socials {
              youtube
              whatsapp
              twitter
              telegram
              linkedIn
              instagram
              facebook
              email
              discord
            }
          }
          socialLinks {
            youtube
            twitter
            tikTok
            telegram
            pintrest
            linkedIn
            instagram
            facebook
            email
          }
        }
        translation(locale: ${locale}) {
          translations
        }
      }`
}
