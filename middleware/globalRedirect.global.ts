export default defineNuxtRouteMiddleware((to) => {
  if (useRuntimeConfig().public.IS_GLOBAL_SITE && to.path !== '/') {
    return navigateTo('/')
  }
})
