<template>
  <transition name="page" mode="out-in" appear>
    <div
      v-if="pageData || globalData"
      class="max-w-screeen flex min-h-screen flex-col"
    >
      <TheNavigation
        :key="String(store.localization.userSelectedLocale)"
        :on-global-page="convertToBoolean(useRuntimeConfig().public.IS_HOME)"
        :tag-line="globalData?.tagLine"
      />
      <main class="min-h-screen">
        <transition name="page" mode="out-in">
          <NuxtPage
            v-if="!onGlobalPage"
          />
          <RegionsCarousel v-else />
        </transition>
      </main>
      <TheFooter
        v-if="!onGlobalPage"
        :key="String(store.localization.userSelectedLocale)"
      />
    </div>
    <LoadingState v-else />
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { AsyncData } from 'nuxt/app'
import { useWebsiteStore } from './store/store'
const store = useWebsiteStore()

const onGlobalPage = useRuntimeConfig().public.IS_HOME
const route = useRoute()
interface RegionData {
  region: {
    id: string
    _locales: Array<string>
  }
}
const { data } = await useGraphqlQuery(`query {
  region(filter: {url: {eq: "${useRuntimeConfig().public.DATO_DOMAIN}"}}) {
    id
    _locales
  }
}`) as AsyncData<RegionData, RTCError>

const region = computed(() => {
  return data.value as RegionData
})

onMounted(() => {
  // If User has system language set
  // if (navigator.language && !onGlobalPage) {
  //   const userSystemLocale = navigator.language.split('-')[0]
  //   console.log(userSystemLocale)
  //   if (route.path.includes('/' + userSystemLocale + '/')) {
  //     // If it equals locale in url
  //     store.setLocale(userSystemLocale, false)
  //   } else if (userSystemLocale === useRuntimeConfig().public.DATO_DEFAULT_LOCALE) {
  //     // Not same local as url but is base locale on the site -> go home /
  //     store.setLocale(userSystemLocale, false)
  //     useRouter().push('/')
  //   } else if (region.value.region._locales.includes(userSystemLocale)) {
  //     // Not same local as url but is a locale on the site -> update local and go to the home of that page
  //     store.setLocale(userSystemLocale)
  //     useRouter().push(`/${userSystemLocale}`)
  //   } else {
  //     // Local not present in cms so set default and go home
  //     store.setLocale(useRuntimeConfig().public.DATO_DEFAULT_LOCALE)
  //     useRouter().push('/')
  //   }
  // }
  // Then get region data
  store.setNavigation(convertToBoolean(onGlobalPage))
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
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
