<template>
  <footer
    v-if="footerData"
    class="px-24 pb-24 pt-48 text-14 !text-blue-dark lg:p-72"
    :class="`bg-${backgroundColor}`"
  >
    <div
      class="max-w-screen mx-auto grid w-full max-w-[1392px] grid-cols-1"
      :class="!onGlobalPage
        ? 'xl:grid-cols-[min-content_1fr] xl:gap-x-80 xl:gap-y-64'
        : ''
      "
    >
      <!-- LINKS -->
      <ul
        :class="!onGlobalPage
          ? 'flex flex-wrap items-center gap-16 xl:flex-col xl:items-start'
          : 'order-2 flex gap-16'"
      >
        <LocalizationDropdown v-if="!onGlobalPage" class="w-full" />
        <li
          v-for="(item, index) in pages"
          :key="String(item._modelApiKey)"
          class="last:border-r-0 child:rounded-0 child:border-r-1 child:border-r-black/10 child:!pr-12 child:xl:border-r-0"
          :class="{
            'child:!border-r-0 ': pages && index === pages.length -1
          }"
        >
          <TheLink
            v-if="item._modelApiKey !== 'home_page'"
            :text="item.navigationLabel"
            :url="'/' + item.slug"
            compact
            hide-arrow
          />
        </li>
      </ul>
      <!-- Logos and Text -->
      <div class="mt-72 flex flex-col gap-32 xl:row-span-2 xl:mt-0">
        <div class="flex flex-col gap-24 sm:flex-row">
          <nuxt-link
            v-for="region in allRegionResponse.allRegions"
            :key="region.id"
            :to="region.url"
            :aria-label="region.brandName"
            class="opacity-50 transition-opacity hover:opacity-100 focus:opacity-100"
          >
            <DynamicLogo text-color="#1F2348" logo-color="#1F2348" class="h-32" :brand-name="region.brandName" />
          </nuxt-link>
        </div>
        <div class="flex flex-col gap-8 text-blue-dark/60 ">
          <StructuredText
            v-if="store.region?.id === 'fTo46Ty8To6ukIQsBTRhPQ'"
            class="footer-prose"
            :data="footerData.wpig"
          />
          <div v-html="marked.parse(footerData.legal)" />
          <div class="mt-12 flex flex-col gap-12 font-bold sm:flex-row">
            <TheLink
              v-if="store.region?.id === 'fTo46Ty8To6ukIQsBTRhPQ'"
              text="Zum ausführlichen Haftungsauschluss"
              url="/haftungsausschluss"
              hide-arrow
              secondary
              compact
            />
            <span v-if="store.region?.id === 'fTo46Ty8To6ukIQsBTRhPQ'" class="hidden text-blue-dark/30 sm:block">|</span>
            <TheLink
              :text="footerData.dataProtection"
              url="/data-protection"
              hide-arrow
              secondary
              compact
            />
            <span class="hidden text-blue-dark/30 sm:block">|</span>
            <TheLink
              :text="footerData.cookies"
              url="/cookies"
              hide-arrow
              secondary
              compact
            />
          </div>
        </div>
      </div>
      <!-- Impring and copyright -->
      <div class="mt-48 text-blue-dark/20  xl:self-end" :class="{'xl:mt-0': !onGlobalPage}">
        <div class="flex gap-12 font-bold">
          <TheLink
            :text="footerData.imprint"
            url="/impressum"
            hide-arrow
            secondary
            compact
          />
          <span class="opacity-0">|</span>
          <TheLink
            class="pointer-events-none !opacity-0"
            :text="footerData.privacy"
            url="/privacy"
            hide-arrow
            secondary
            compact
          />
        </div>
        <p class="mt-16 text-blue-dark/30 sm:mt-16">
          {{ footerData.copyrightText }}
        </p>
      </div>
    </div>
    <CookiesBanner v-if="store.getCurrentLocale" />
  </footer>
</template>

<script lang="ts" setup>

import { marked } from 'marked'
import { StructuredText } from 'vue-datocms'
import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import FooterQuery from '../graphql/Footer'
import { useWebsiteStore } from '../store/store'
import type { DynamicLogo } from '#build/components'
import type { Region } from '@/types/dato-models/Region'
import type { Footer } from '@/types/dato-models/Footer'
defineProps({
  backgroundColor: {
    type: String,
    default: 'gray'
  },
  onGlobalPage: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  const iubendaScript = document.getElementById('iubenda-widgets')
  if (iubendaScript) {
    document.body.removeChild(iubendaScript)
  }

  const s = document.createElement('script')
  s.src = 'https://cdn.iubenda.com/iubenda.js'
  s.id = 'iubenda-widgets'
  document.body.appendChild(s)
})

const store = useWebsiteStore()
const route = useRoute()
const pages = computed(() => store.pages?.filter((item) => {
  return item._modelApiKey !== 'home_page'
}))

interface FooterResponse {
  footer: Footer
}

interface AllRegionsResponse {
  allRegions: Region[]
}
const locale = computed(() => {
  if (route.params.locale && route.params.locale.length === 2) {
    return route.params.locale
  } else {
    return store.getCurrentLocale
  }
})
const footerQuery = FooterQuery(locale.value)
const { data: { value: response } } = await useGraphqlQuery(footerQuery) as AsyncData<FooterResponse, RTCError>

const footerData = computed(() => {
  if (response) {
    return response.footer as Footer
  } else {
    return null
  }
})
const { data: { value: allRegionResponse } } = await useGraphqlQuery(`query {
  allRegions (filter: {state: {eq: "live"}}) {
    id
    brandName
    url
  }
}`) as AsyncData<AllRegionsResponse, RTCError>
</script>

<style>
.footer-prose a {
  @apply text-blue-light underline font-semibold hover:text-blue-darker;
  word-break: break-word;
}
</style>
