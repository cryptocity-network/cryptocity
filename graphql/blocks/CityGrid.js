import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    items {
      title
      linkText
      link
      description {
        value
        links
        blocks
      }
      image {
        url
      }
    }
  `
}
