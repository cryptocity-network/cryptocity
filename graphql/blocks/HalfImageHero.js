import baseBlockValues from './blockValues'

export default () => {
  // id
  // _modelApiKey
  // settings {
  //   backgroundColor
  // }
  return `
    ${baseBlockValues()}
    headline
    subline
    linkLabel
    link
    label
    image {
      url
    }
`
}
