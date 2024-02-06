import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    blocks {
      youtubeLink
      badge
      logo {
        alt
        url
      }
      label
      image {
        url
        alt
        video {
          mp4Url
        }
      }
      headline
      description {
        value
        links
        blocks
      }
      hasButton
      buttonLink
      buttonLabel
      hasSecondaryButton
      secondaryButtonLink
      secondaryButtonLabel
    }
  `
}
