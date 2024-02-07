import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    label
    headline
    subline
    image {
    url
    }
    hasLink
    simpleLink {
      ${SimpleLink()}
    }
`
}
