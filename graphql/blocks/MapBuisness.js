import Headline from './Headline'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    headline {
      ${Headline()}
    }
    joinCardTitle
    joinCardDescription
    joinLinkLabel
    joinLink
`
}
