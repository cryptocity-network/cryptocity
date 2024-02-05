<template>
  <main class="min-h-screen">
    <template v-if="data">
      <component
        :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        v-for="(component, index) in components"
        :key="component.id"
        :component-name="component._modelApiKey"
        :data="component"
        :index="index"
        :background-color="backgroundColorArray?.[index]"
      />
      <ContactForm v-if="components" show-header />
    </template>
  </main>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import { usePageQueryGetter } from '#imports'
import { useWebsiteStore } from '~/store/store'
import type { Component } from '@/types/index'

const store = useWebsiteStore()
const regionId = store?.region?.id
const locale = store.getCurrentLocale
const route = useRoute()

if (route.params.locale !== store.getCurrentLocale) {
  store.setLocale(route.params.locale as string)
}

const currentPageType = computed(() => {
  const pageType = store.getPages?.find((x) => {
    return x.slug === route.params.uid
  })
  return pageType?._modelApiKey.replace(/_.*/, '')
})
const query = usePageQueryGetter(currentPageType.value, regionId, locale)
const { data } = await useGraphqlQuery(query)

const backgroundColorArray = computed(() => {
  if (data && currentPageType) {
    return Object.values(data.value[`${currentPageType.value}Page`].backgroundColors)
  }
  return null
})

const components = computed(() => {
  if (data && currentPageType) {
    return filterPageResponseForComponents(data.value[`${currentPageType.value}Page`] as Array<Component>) as Array<Component>
  }
  return null
})
</script>

<style>
</style>
