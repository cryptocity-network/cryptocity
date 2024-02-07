import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    blocks {
      logo {
        alt
        url
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
        url
        alt
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
