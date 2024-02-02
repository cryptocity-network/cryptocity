<template>
  <main class="min-h-screen">
    <template v-if="data">
      <component
        :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        v-for="(component, index, k) in data[`${currentPageType}Page`]"
        :key="component.id"
        :component-name="component._modelApiKey"
        :data="component"
        :index="k"
      />
      <ContactForm v-if="data[`${currentPageType}Page`]" show-header />
    </template>
  </main>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import { usePageQueryGetter } from '#imports'
import { useWebsiteStore } from '~/store/store'

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
</script>

<style>
</style>
