import ResponsiveImage from '../ResponsiveImage'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    headline
    description
    youtubeLink
    image {
      ${ResponsiveImage()}
    }
    show
  `
}
