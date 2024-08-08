export default defineI18nLocale(async () => {
  const { data } = await useGraphqlQuery(`
  query {
      translation(locale: fr) {
          translations
      }
  }`)
  return data.value.translation.translations
})
