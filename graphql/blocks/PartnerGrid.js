import baseBlockValues from './blockValues'

export default () => {
  return `
    ${baseBlockValues()}
    grid {
      youtube
      whatsapp
      twitter
      telegram
      logo {
        url
        alt
      }
      linkedIn
      linkUrl
      linkLabel
      label
      instagram
      id
      headlineLogo {
        url
        alt
      }
      headline
      facebook
      email
      discord
      description {
        value
      }
      badge
    }
  `
}
