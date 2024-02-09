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
        url
      }
      description
      id
      _modelApiKey
    }
  `
}
