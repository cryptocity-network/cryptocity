export default defineNuxtRouteMiddleware((to) => {
  if (useRuntimeConfig().public.IS_GLOBAL_SITE && to.path !== '/') {
    return navigateTo('/')
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
