<template>
  <div>
    <template
      v-for="(component, index) in components"
      :key="component?.id"
    >
      <component
        :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        :component-name="component._modelApiKey"
        :data="component"
        :index="index"
        :background-color="backgroundColorArray?.[index]"
      />
    </template>
    <ContactForm v-if="currentPageType !== 'home'" :key="($route.params.path as string)" show-header />
  </div>
</template>

<script lang="ts" setup>
import { usePageQueryGetter } from '#imports'
import { useWebsiteStore } from '~/store/store'
import type { Component } from '@/types/index'

const store = useWebsiteStore()
const regionId = store?.region?.id
const locale = store.getCurrentLocale
const route = useRoute()

const currentPageType = computed(() => {
  if (route.path === '/') {
    return 'home'
  } else {
    const pageType = store.getPages?.find((x) => {
      return x.slug === route.params.uid
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

const components = computed(() => {
  if (data && currentPageType) {
    return filterPageResponseForComponents(data.value[`${currentPageType.value}Page`] as Array<Component>) as Array<Component>
  }
  return null
})
</script>

<style>
</style>
