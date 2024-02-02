<template>
  <div>
    <template
      v-for="(component, index, k) in data[`${currentPageType}Page`]"
      :key="typeof component === 'string' ? 'id' : component?.id"
    >
      <component
        :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        :component-name="component._modelApiKey"
        :data="component"
        :index="k"
      />
    </template>
    <ContactForm v-if="currentPageType !== 'home'" :key="($route.params.path as string)" show-header />
  </div>
</template>

<script lang="ts" setup>
import { usePageQueryGetter } from '#imports'
import { useWebsiteStore } from '~/store/store'

const store = useWebsiteStore()
const regionId = store?.region?.id
const locale = store.getCurrentLocale
const route = useRoute()

const currentPageType = computed(() => {
  if (route.path === '/') {
    return 'home'
  } else {
    const pageType = store.getCurrentRegion?.pages.find((x) => {
      return x.slug === route.params.uid
    })
    return pageType?._modelApiKey.replace(/_.*/, '')
  }
})
const query = usePageQueryGetter(currentPageType.value, regionId, locale)
const { data } = await useGraphqlQuery(query)

const pageTitle = computed(() => {
  const cityName = route.path.split('/').pop()?.replace(/%20/g, ' ')
  if (cityName !== '') {
    return cityName!.charAt(0).toUpperCase() + cityName!.slice(1)
  } else {
    const baseUrl = window?.location.host.split(':')[0]
    return baseUrl!.charAt(0).toUpperCase() + baseUrl!.slice(1)
  }
})
useHead({
  title: pageTitle
})
</script>

<style>
</style>
