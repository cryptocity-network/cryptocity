import ResponsiveImage from '../ResponsiveImage'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    headline
    youtubeVideoLink
    thumbnail {
      ${ResponsiveImage()}
    }
`
}
