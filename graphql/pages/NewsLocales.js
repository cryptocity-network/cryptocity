export default (slug) => {
  return `query {
    news(filter: {slug: {eq: "${slug}"}}) {
      _locales
    }
  }`
}
