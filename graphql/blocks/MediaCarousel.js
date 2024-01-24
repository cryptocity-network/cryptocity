import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    carousel {
      id
      _modelApiKey
      headline
      media {
        mimeType
        url
        video {
          streamingUrl
        }
        alt
      }
    }
`
}
