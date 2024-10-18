export default defineEventHandler(async (event) => {
  if (!useRuntimeConfig().REDIRECT_RULES) { return }

  const url = getRequestURL(event)

  /**
     * This expects a value of this format:
     * `targetdomain.com,citydomain1.com:cityname1,citydomain2.com:cityname2`
     */
  const [targetdomain, ...redirects] = useRuntimeConfig().REDIRECT_RULES.split(',')

  const defaultLocale = useRuntimeConfig().public.DATO_DEFAULT_LOCALE || 'en'

  for (const redirect of redirects) {
    const [citydomain, cityname] = redirect.split(':')

    if (url.hostname === citydomain.trim()) {
      await sendRedirect(event, `https://${targetdomain.trim()}/${defaultLocale}/cities/${cityname.trim()}`, 301)
      break
    }
  }
})
