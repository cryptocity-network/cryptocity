import ResponsiveImage from '../ResponsiveImage'
import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'
export default () => {
  return `
    ${baseBlockValues()}
    image {
      ${ResponsiveImage()}
    }
    label
    headline
    subline
    simpleLink {
      ${SimpleLink()}
    }
`
}
