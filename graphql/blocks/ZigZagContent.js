import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    blocks {
      secondaryButtonLink
      secondaryButtonLabel
      youtubeLink
      logo {
        alt
        url
      }
      label
      image {
        url
        alt
      }
      headline
      description {
        value
        links
        blocks
      }
      buttonLink
      buttonLabel
      badge
    }
  `
}
