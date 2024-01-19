export default (countryId, locale) => {
  return `query {
    allCities(filter: {country: {eq: "fTo46Ty8To6ukIQsBTRhPQ"}}, locale: en) {
      name
      mainImage {
        url
        alt
      }
      id
    }
  }`
}
