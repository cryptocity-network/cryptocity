export default () => {
  return `
    isExternalLink
    url
    label
    ariaLabel
    internalLink {
        ... on HomePageRecord {
            id
        }
        ... on CityRecord {
            name
        }
        ... on MerchantPageRecord {
            slug
        }
        ... on BeginnerPageRecord {
            slug
        }
        ... on NetworkPageRecord {
            slug
        }
        ... on AboutPageRecord {
            slug
        }
        ... on ContactPageRecord {
            slug
        }
    }
`
}
