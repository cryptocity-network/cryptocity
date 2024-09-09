import baseBlockValues from './blockValues'

export default () => {
  return `
  value
  blocks
  links {
    ... on CookieRecord {
      ${baseBlockValues()}
      title
    }
    ... on ImpressumRecord {
      ${baseBlockValues()}
      title
    }
    ... on DataProtectionRecord {
      ${baseBlockValues()}
      title
    }
    ... on HaftungsausschlussRecord {
      ${baseBlockValues()}
      title
    }
  }
  `
}
