export default defineI18nLocale(async () => {
  const { data } = await useGraphqlQuery(`
  query {
      translation(locale: sl) {
          translations
      }
  }`)
  return data.value.translation.translations
})
