<template>
  <main v-if="data" class="min-h-screen">
    <component
      :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
      v-for="(component, index, k) in data[`${currentPageType}Page`]"
      :key="component.id"
      :component-name="component._modelApiKey"
      :data="component"
      :index="k"
    />
    <ContactForm v-if="data[`${currentPageType}Page`]" show-header />
  </main>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import { useWebsiteStore } from '~/store/store'
import { usePageQueryGetter } from '#imports'

const store = useWebsiteStore()
const countryId = store?.country?.id
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
    const pageType = store.getCurrentCountry?.pages.find((x) => {
      return x.slug === route.params.locale
    })
    return pageType?._modelApiKey.replace(/_.*/, '')
  }
})
const query = usePageQueryGetter(currentPageType.value, countryId, locale)
const { data } = await useGraphqlQuery(query)
</script>

<style>
  section + section {
    @apply -mt-160
  }
</style>
