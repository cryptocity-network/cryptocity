import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'
import Headline from './Headline'
export default () => {
  return `
    ${baseBlockValues()}
    headline {
      ${Headline()}
    }
    simpleLink {
      ${SimpleLink()}
    }
  `
}
