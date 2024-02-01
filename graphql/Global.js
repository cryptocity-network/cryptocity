export default () => {
  return `query {
    global {
      tagLine
      regions {
        _modelApiKey
        settings {
          backgroundColor
        }
        regions {
          id
          url
          name
          socialLinks {
            image {
              url
            }
            logo {
              url
            }
          }
        }
      }
    }
  }`
}
