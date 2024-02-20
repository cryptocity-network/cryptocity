<template>
  <transition name="page" mode="out-in" appear>
    <div
      v-if="pageData || globalData"
      class="max-w-screeen flex flex-col"
    >
      <TheNavigation
        :key="`Navigation-${String(store.localization.userSelectedLocale)}`"
        :on-global-page="convertToBoolean(useRuntimeConfig().public.IS_GLOBAL_SITE)"
        :tag-line="globalData?.tagLine"
      />
      <main class="min-h-screen">
        <NuxtPage
          v-if="!onGlobalPage"
        />
        <RegionsCarousel v-else />
      </main>
      <TheFooter
        :class="{ 'pt-120': onGlobalPage }"
        :on-global-page="convertToBoolean(useRuntimeConfig().public.IS_GLOBAL_SITE)"
        :background-color="onGlobalPage ? 'white' : 'gray'"
      />
      <div id="overlay" class="z-[100]" />
      <PreviewModeControls />
    </div>
    <LoadingState v-else />
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useWebsiteStore } from './store/store'

const store = useWebsiteStore()
const onGlobalPage = useRuntimeConfig().public.IS_GLOBAL_SITE
const route = useRoute()

const region = computed(() => {
  return store.region
})

await useAsyncData('setNavigation', () => store.setNavigation(convertToBoolean(onGlobalPage)).then(() => true))

onMounted(() => {
  // If User has system language set
  if (navigator.language && !onGlobalPage) {
    const userSystemLocale = navigator.language.split('-')[0]
    // Set User locale if exists on site
    if (region.value?._locales.includes(userSystemLocale)) {
      store.setLocale(userSystemLocale, false)
    } else {
      store.setLocale(useRuntimeConfig().public.DATO_DEFAULT_LOCALE)
    }
    // Check if url is user locale otherwise change
    if (route.params.locale && route.params.locale.length === 2) { // There is a locale in the url
      if (userSystemLocale !== route.params.locale) { // If different to user locale
        if (userSystemLocale === useRuntimeConfig().public.DATO_DEFAULT_LOCALE) {
          useRouter().push('/')
        } else {
          useRouter().push('/' + userSystemLocale)
        }
      }
    } else if (userSystemLocale !== useRuntimeConfig().public.DATO_DEFAULT_LOCALE) { // No locale in url, but user doesn't === base so redirect to user locale
      useRouter().push('/' + userSystemLocale)
    }
  }
  if (store.getCurrentLocale !== useRuntimeConfig().public.DATO_DEFAULT_LOCALE) {
    nextTick(() => {
      store.setNavigation(false)
    })
  }
})

function convertToBoolean (input: string | boolean): boolean | undefined {
  if (typeof input === 'boolean') {
    return input
  }
  return input === 'true'
}

const pageData = computed(() => {
  if (!onGlobalPage) {
    return store.getCurrentRegion
  }
  return null
})
const globalData = computed(() => {
  if (onGlobalPage) {
    return store.getGlobalData
  }
  return null
})
const pageTitle = computed(() => {
  const pageTitle = route.path.split('/').pop()?.replace(/%20/g, ' ').replace(/-/g, ' ')
  if (pageTitle && pageTitle.length > 2) {
    return pageTitle
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  } else {
    return null
  }
})
const regionName = computed(() => {
  if (store.region) {
    return store.region?.brandName
  } else {
    return ''
  }
})
const makeName = computed(() => {
  return `${pageTitle.value ? pageTitle.value + ' - ' : ''}${regionName.value}\u00AE`
})

useHead({
  title: makeName
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
