export default () => {
  return `query {
    global {
      tagLine
      countries {
        _modelApiKey
        settings {
          backgroundColor
        }
        countries {
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
