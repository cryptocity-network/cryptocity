interface Test {
    record: any,
    children: any,
    transformedMeta: any,
  }

export default ({ record, children, transformedMeta }: Test) => {
  console.log(record._modelApiKey)
  switch (record._modelApiKey) {
    case 'haftungsausschluss':
    case 'de_haftungsausschluss':
      return h(
        'a',
        { ...transformedMeta, href: '/haftungsausschluss' },
        children
      )
    case 'data_protection':
    case 'de_data_protection':
      return h(
        'a',
        { ...transformedMeta, href: '/data-protection' },
        children
      )
    case 'cookie':
    case 'de_cookie':
      return h(
        'a',
        { ...transformedMeta, href: '/cookies' },
        children
      )
    case 'impressum':
    case 'de_impressum':
      return h(
        'a',
        { ...transformedMeta, href: '/impressum' },
        children
      )
    default:
      return h(
        'a',
        { ...transformedMeta, href: '/' },
        children
      )
  }
}
