import SimpleLink from '../SimpleLink'
import baseBlockValues from './blockValues'
export default () => {
  // id
  // _modelApiKey
  // settings {
  //   backgroundColor
  // }
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
