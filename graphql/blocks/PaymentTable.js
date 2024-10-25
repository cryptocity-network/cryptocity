// import ResponsiveImage from '../ResponsiveImage'
// table {
//   id
//   fees
//   acceptedCrypto
//   logo {
//     ${ResponsiveImage()}
//   }
//   nimiqPay
//   payment
//   releaseDate
// }
import baseBlockValues from './blockValues'
export default () => {
  return `
    ${baseBlockValues()}
    table {
      axis {
        releaseDate
        payment
        nimiqPay
        id
        fees
        acceptedCryptoCurrencies
      }
      footnote
    }
    
`
}
