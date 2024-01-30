<template>
  <template v-if="currentPageType !== 'global'">
    <template
      v-for="(component, index, k) in response[`${currentPageType}Page`]"
      :key="typeof component === 'string' ? 'id' : component?.id"
    >
      <component
        :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        :component-name="component._modelApiKey"
        :data="component"
        :index="k"
      />
    </template>
    <ContactForm :key="($route.params.path as string)" show-header />
  </template>
  <GlobalCarousel v-else />
</template>

<script lang="ts" setup>
import { usePageQueryGetter } from '#imports'
import { useWebsiteStore } from '~/store/store'

const store = useWebsiteStore()
const countryId = store?.country?.id
const locale = store.getCurrentLocale
const route = useRoute()

const currentPageType = computed(() => {
  if (route.path === '/') {
    return useRuntimeConfig().public.IS_HOME ? 'global' : 'home'
  } else {
    const pageType = store.getCurrentCountry?.pages.find((x) => {
      return x.slug === route.params.uid
    })
    return pageType?._modelApiKey.replace(/_.*/, '')
  }
})
const query = usePageQueryGetter(currentPageType.value, countryId, locale)
// const { data, error } = await useGraphqlQuery({ query })
const { data: response }: any = await $fetch('https://graphql.datocms.com', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${useRuntimeConfig().public.GRAPHQL_TOKEN}`
  },
  body: {
    query
  }
})
</script>

<style>
  section + section {
    @apply -mt-160
  }
</style>
