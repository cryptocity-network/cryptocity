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
            twitter
            telegram
            email
            linkedIn
          }
        }
        translation(locale: ${locale}) {
          translations
        }
      }`
}
