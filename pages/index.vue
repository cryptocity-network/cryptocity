<template>
  <main>
    <p v-if="error">
      Something bad happened!
    </p>
    <component
      :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
      v-for="(component, index, k) in data[`${currentPageType}Page`]"
      v-else
      :key="component.id"
      :component-name="component._modelApiKey"
      :data="component"
      :index="k"
    />
    <ContactForm :key="($route.params.path as string)" show-header />
  </main>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import homePage from '@/graphql/HomePage.js'
import merchantPage from '@/graphql/MerchantPage.js'
import beginnerPage from '@/graphql/BeginnerPage.js'
import aboutPage from '@/graphql/AboutPage.js'
import networkPage from '@/graphql/NetworkPage.js'
import { useWebsiteStore } from '~/store/store'

const store = useWebsiteStore()
const countryId = store?.country?.id
const locale = store.getCurrentLocale
const route = useRoute()

const currentPageType = computed(() => {
  if (route.path === '/') {
    return 'home'
  } else {
    const pageType = store.getCurrentCountry?.pages.find((x) => {
      return x.slug === route.params.uid
    })
    return pageType?._modelApiKey.replace(/_.*/, '')
  }
})
let query = null

switch (currentPageType.value) {
  case 'home':
    query = homePage(countryId, locale)
    break
  case 'merchant':
    query = merchantPage(countryId, locale)
    break
  case 'beginner':
    query = beginnerPage(countryId, locale)
    break
  case 'about':
    query = aboutPage(countryId, locale)
    break
  case 'network':
    query = networkPage(countryId, locale)
    break
  default:
    break
}
const { data, error } = await useGraphqlQuery({ query })

</script>

<style>
  section + section {
    @apply -mt-160
  }
</style>
