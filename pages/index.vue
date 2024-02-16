<template>
  <main>
    <div v-if="data && currentPageType !== 'contact'" class="min-h-screen">
      <component
        :is="component._modelApiKey?.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        v-for="(component, index) in components"
        :key="component.id"
        :component-name="component._modelApiKey"
        :data="component"
        :index="index"
        :background-color="backgroundColorArray?.[index]"
      />
      <ContactForm v-if="data[`${currentPageType}Page`] && currentPageType !== 'home'" show-header />
    </div>
    <div v-else-if="data && currentPageType === 'contact'">
      <section class="min-h-screen bg-gray !py-0">
        <ContactForm :data="data.contactPage" class="!pt-144" />
      </section>
    </div>
    <ErrorMessage v-else-if="error" />
  </main>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import { useWebsiteStore } from '@/store/store'
import { usePageQueryGetter } from '#imports'
import type { Component } from '@/types/index'

const store = useWebsiteStore()
const regionId = store?.region?.id
const locale = store.getCurrentLocale
const route = useRoute()

/* ROUTE LOCALE PARAM HERE CAN BE CONFUSING
  - Locale always refers to first route param in this instance. Whether that is a page name or a language locale
  - currentPageType function filters for this where it compares this first param to siteLocales
  - If not a locale then it treats as a page and moves forwards. This is a quirk of having dynamic urls which change depending on language
*/
const currentPageType = computed(() => {
  // If locale exists and is present on site
  if (store.localization.siteLocales?.some(x => x === route.params.locale)) {
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
const { data, error } = await useGraphqlQuery(query)

const backgroundColorArray = computed(() => {
  if (data && currentPageType) {
    return Object.values(data.value[`${currentPageType.value}Page`].backgroundColors)
  }
  return null
})

const components = computed(() => {
  if (data.value && currentPageType) {
    return filterPageResponseForComponents(data.value[`${currentPageType.value}Page`] as Array<Component>) as Array<Component>
  }
  return null
})

onMounted(() => {
  // If route doesn't exist then send user to home
  // if (currentPageType.value === null) {
  //   const url = () => {
  //     if (store.localization.siteLocales?.some(x => x === route.params.locale)) {
  //       return '/' + route.params.locale
  //     } else {
  //       return '/'
  //     }
  //   }
  //   useRouter().push(url())
  // }
})
</script>
