export interface PaymentOption {
    id: string
    nimiqPay: boolean
    releaseDate: string
    payment: string
    fees: string
    acceptedCrypto: Array<string>
    logo: object
}
