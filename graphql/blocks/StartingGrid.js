import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
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
