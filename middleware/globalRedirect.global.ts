export default defineNuxtRouteMiddleware((to) => {
  if (useRuntimeConfig().public.IS_HOME && to.path !== '/') {
    return navigateTo('/')
  }
})
