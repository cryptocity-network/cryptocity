import { useRuntimeConfig } from 'nuxt/app'
const runtimeConfig = useRuntimeConfig()
export default () => {
  return runtimeConfig.public.DATO_DOMAIN
}
