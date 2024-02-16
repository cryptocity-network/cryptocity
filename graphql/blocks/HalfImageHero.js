import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'
export default () => {
  return `
    ${baseBlockValues()}
    image {
      url
    }
    label
    headline
    subline
    simpleLink {
      ${SimpleLink()}
    }
`
}
