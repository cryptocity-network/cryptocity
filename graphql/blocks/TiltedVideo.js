import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    headline
    youtubeVideoLink
    thumbnail {
      url
      alt
    }
`
}
