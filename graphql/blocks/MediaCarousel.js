import ResponsiveImage from '../ResponsiveImage'
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
        ${ResponsiveImage()}
        video {
          streamingUrl
        }
      }
    }
`
}
