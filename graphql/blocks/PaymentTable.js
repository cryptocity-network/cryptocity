import ResponsiveImage from '../ResponsiveImage'
import baseBlockValues from './blockValues'
export default () => {
  return `
    ${baseBlockValues()}
    table {
      table {
        id
        fees
        acceptedCryptoCurrencies
        logo {
          ${ResponsiveImage()}
        }
        nimiqPay
        payment
        releaseDate
      }
      axis {
        releaseDate
        payment
        nimiqPay
        id
        fees
        acceptedCryptoCurrencies
      }
    }
    
`
}
