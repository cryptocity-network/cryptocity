import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    image {
      alt
      url
    }
  `
}
