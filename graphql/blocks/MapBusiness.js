import ResponsiveImage from '../ResponsiveImage'
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
    locationPlaceholderImage {
      ${ResponsiveImage()}
    }
`
}
