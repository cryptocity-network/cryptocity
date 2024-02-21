import ResponsiveImage from '../ResponsiveImage'
import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    items {
      title
      description {
        value
        links
        blocks
      }
      image {
        ${ResponsiveImage()}
      }
      hasLink
      simpleLink {
        ${SimpleLink()}
      }
    }
  `
}
