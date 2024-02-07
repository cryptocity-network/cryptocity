import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    label
    headline
    subline
    hasLink
    simpleLink {
      ${SimpleLink()}
    }
`
}
