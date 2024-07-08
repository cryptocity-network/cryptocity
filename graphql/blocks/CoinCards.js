import ResponsiveImage from '../ResponsiveImage'
import baseBlockValues from './blockValues'
export default () => {
  return `
    ${baseBlockValues()}
      coinImage {
        ${ResponsiveImage()}
      }
      coinDescriptions {
        text
        id
        comingSoon
        icon {
          ${ResponsiveImage()}
        }
      }
`
}
