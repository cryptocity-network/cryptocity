import ResponsiveImage from '../ResponsiveImage'
import baseBlockValues from './blockValues'
import Headline from './Headline'

export default () => {
  return `
    ${baseBlockValues()}
    headline {
      ${Headline()}
    }
    items {
      label
      image {
        ${ResponsiveImage()}
      }
      description
      id
      _modelApiKey
    }
  `
}
