export default defineI18nLocale(async () => {
  const { data } = await useGraphqlQuery(`
  query {
      translation(locale: es) {
          translations
      }
  }`)
  return data.value.translation.translations
})
