interface Test {
    record: any,
    children: any,
    transformedMeta: any,
  }

export default ({ record, children, transformedMeta }: Test) => {
  switch (record._modelApiKey) {
    case 'haftungsausschluss':
      return h(
        'a',
        { ...transformedMeta, href: '/haftungsausschluss' },
        children
      )
    case 'data_protection' || 'de_data_protection':
      return h(
        'a',
        { ...transformedMeta, href: '/data-protection' },
        children
      )
    case 'cookie' || 'de_cookie':
      return h(
        'a',
        { ...transformedMeta, href: '/cookies' },
        children
      )
    case 'impressum' || 'de_impressum':
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
