import ResponsiveImage from '../ResponsiveImage'
import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    blocks {
      logo {
        url
        alt
      }
      label
      headline
      badge
      description {
        value
        links
        blocks
      }
      mediaType
      youtubeLink
      image {
        ${ResponsiveImage()}
        video {
          mp4Url
        }
      }
      iframe
      hasButton
      simpleLink {
        ${SimpleLink()}
      }
      hasSecondaryButton
      simpleLinkSecondary {
        ${SimpleLink()}
      }
    }
  `
}
