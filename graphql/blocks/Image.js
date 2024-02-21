import ResponsiveImage from '../ResponsiveImage'
import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    image {
      ${ResponsiveImage()}
    }
  `
}
