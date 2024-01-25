import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    label
    headline
    subline
    link
    linkLabel
    image {
    url
    }
`
}
