export default () => {
  return `query {
    global(locale: ${useI18n().locale.value}) {
      tagLine
      contactButtonLabel
    }
  }`
}
