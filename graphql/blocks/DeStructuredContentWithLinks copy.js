import baseBlockValues from './blockValues'

export default () => {
  return `
  value
  blocks
  links {
    ... on DeCookieRecord {
      ${baseBlockValues()}
      title
    }
    ... on DeImpressumRecord {
      ${baseBlockValues()}
      title
    }
    ... on DeDataProtectionRecord {
      ${baseBlockValues()}
      title
    }
    ... on DeHaftungsausschlussRecord {
      ${baseBlockValues()}
      title
    }
  }
  `
}
