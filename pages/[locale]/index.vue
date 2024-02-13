<template>
  <main v-if="data && currentPageType !== 'contact'" class="min-h-screen">
    <component
      :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
      v-for="(component, index) in components"
      :key="component.id"
      :component-name="component._modelApiKey"
      :data="component"
      :index="index"
      :background-color="backgroundColorArray?.[index]"
    />
    <ContactForm v-if="data[`${currentPageType}Page`] && currentPageType !== 'home'" show-header />
  </main>
  <main v-else-if="data && currentPageType === 'contact'">
    <section class="min-h-screen bg-gray !py-0">
      <ContactForm :data="data.contactPage" class="!pt-144" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import { useWebsiteStore } from '~/store/store'
import { usePageQueryGetter } from '#imports'
import type { Component } from '@/types/index'

const store = useWebsiteStore()
const regionId = store?.region?.id
const locale = store.getCurrentLocale
const route = useRoute()

if (store.localization.siteLocales?.some(x => x === route.params.locale)) {
  store.setLocale(route.params.locale as string)
} else {
  store.setLocale(useRuntimeConfig().public.DATO_DEFAULT_LOCALE)
}

const currentPageType = computed(() => {
  if (store.localization.siteLocales?.some(x => x === route.params.locale)) {
    return 'home'
  } else {
    const pageType = store.getPages?.find((x) => {
      return x.slug === route.params.locale
    })
    return pageType?._modelApiKey.replace(/_.*/, '')
  }
})
const query = usePageQueryGetter(currentPageType.value, regionId, locale)
const { data } = await useGraphqlQuery(query)

const backgroundColorArray = computed(() => {
  if (data && currentPageType) {
    return Object.values(data.value[`${currentPageType.value}Page`].backgroundColors)
  }
  return null
})

console.log('teest')

const components = computed(() => {
  if (data && currentPageType) {
    return filterPageResponseForComponents(data.value[`${currentPageType.value}Page`] as Array<Component>) as Array<Component>
  }
  return null
})
</script>

<style>
</style>
