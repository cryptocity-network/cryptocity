export default (cityName) => {
  return `query {
    city(filter: {name: {eq: "${cityName}"}}) {
      id
    }
  }`
}
