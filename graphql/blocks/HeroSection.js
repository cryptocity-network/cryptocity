import ResponsiveImage from '../ResponsiveImage'
import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    label
    headline
    subline
    image {
      ${ResponsiveImage()}
    }
    hasLink
    simpleLink {
      ${SimpleLink()}
    }
`
}
