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
            _modelApiKey
        }
        ... on BeginnerPageRecord {
            _modelApiKey
        }
        ... on NetworkPageRecord {
            _modelApiKey
        }
        ... on AboutPageRecord {
            _modelApiKey
        }
        ... on ContactPageRecord {
            _modelApiKey
        }
    }
`
}
