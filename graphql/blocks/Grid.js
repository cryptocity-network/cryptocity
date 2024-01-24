import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    gridItems {
      id
      headline
      subline
      icon {
        alt
        url
      }
    }
  `
}
