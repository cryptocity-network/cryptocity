export default defineNuxtRouteMiddleware((to) => {
  if (useRuntimeConfig().public.IS_GLOBAL_SITE && (!to.path.includes('/home') && !to.path.includes('/contact'))) {
    const useLocale = useLocalePath()
    console.log('redirect')
    return navigateTo(useLocale('/home'))
  }
  // No cities index page so redirect back to home
  if (to.path.includes('/cities') && !to.params.city) {
    return navigateTo('/')
  }

  if (to.query.preview === 'true' && process.client) {
    to.query.preview = null
    localStorage.setItem('preview', 'true')
  }
})
