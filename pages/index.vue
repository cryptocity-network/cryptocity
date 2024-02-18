<template>
  <main>
    <div v-if="response && currentPageType !== 'contact'" class="">
      <component
        :is="component._modelApiKey?.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        v-for="(component, index) in components"
        :key="component.id"
        :component-name="component._modelApiKey"
        :data="component"
        :index="index"
        :background-color="backgroundColorArray?.[index]"
      />
      <ContactForm v-if="pageData && currentPageType !== 'home'" show-header />
    </div>
    <div v-else-if="response && currentPageType === 'contact'">
      <section class="min-h-screen bg-gray !py-0">
        <ContactForm :data="response.contactPage" class="!pt-144" />
      </section>
    </div>
    <ErrorMessage v-else-if="error" />
  </main>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import { useWebsiteStore } from '@/store/store'
import { usePageQueryGetter } from '#imports'
import type { Page } from '@/types/dato-models/Page'

const store = useWebsiteStore()
const regionId = store.region?.id
const locale = store.getCurrentLocale
const route = useRoute()

interface PageQueryResponse {
  homePage?: Page,
  merchantPage?: Page,
  beginnerPage?: Page,
  networkPage?: Page,
  aboutPage?: Page,
  contactPage?: Page,
}
/* ROUTE LOCALE PARAM HERE CAN BE CONFUSING
  - Locale always refers to first route param in this instance. Whether that is a page name or a language locale
  - currentPageType function filters for this where it compares this first param to siteLocales
  - If not a locale then it treats as a page and moves forwards. This is a quirk of having dynamic urls which change depending on language
*/
const currentPageType: ComputedRef<string | null | undefined> = computed(() => {
  // If locale exists and is present on site
  if (store.localization.siteLocales?.some((x: string) => x === route.params.locale)) {
    const pageType = store.getPages?.find((x) => {
      return x.slug === route.params.uid
    })
    // If page type exists go to it. Otherwise go home
    return pageType ? pageType._modelApiKey.replace(/_.*/, '') : null
  } else {
    const pageType = store.getPages?.find((x) => {
      return x.slug === route.params.locale
    })
    return pageType?._modelApiKey.replace(/_.*/, '')
  }
})
const query = currentPageType.value && usePageQueryGetter(currentPageType.value, regionId, locale)
const { data: { value: response }, error } = await useGraphqlQuery(query) as AsyncData<PageQueryResponse, RTCError>

const pageData = computed(() => {
  const pageKey = `${currentPageType.value}Page` as keyof PageQueryResponse
  return response[pageKey as keyof typeof response] as Page
})
const backgroundColorArray: ComputedRef<String[] | null> = computed(() => {
  if (response && currentPageType) {
    return Object.values(pageData.value.backgroundColors)
  }
  return null
})

const components = computed(() => {
  if (response && currentPageType) {
    return filterPageResponseForComponents(pageData.value!) as Array<Component>
  }
  return null
})
</script>
