<template>
  <footer
    class="p-16 text-14 !text-blue-dark lg:p-72"
    :class="`bg-${backgroundColor}`"
  >
    <div class="max-w-screen mx-auto grid w-full max-w-screen-2xl grid-cols-1 xl:grid-cols-[min-content_1fr] xl:gap-x-80 xl:gap-y-64">
      <!-- LINKS -->
      <ul
        class="flex flex-wrap items-center gap-16 xl:flex-col xl:items-start"
      >
        <LocalizationDropdown class="w-full" />
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
            :link="'/' + item.slug"
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
            class="opacity-50 transition-opacity hover:opacity-100 focus:opacity-100"
          >
            <DynamicLogo text-color="#1F2348" logo-color="#1F2348" class="h-32" :custom-url="region.url" />
          </nuxt-link>
        </div>
        <div class="flex flex-col gap-8 text-blue-dark/60 ">
          <StructuredText
            v-if="store.region?.id === 'fTo46Ty8To6ukIQsBTRhPQ'"
            class="footer-prose"
            :data="data.footer.wpig"
          />
          <div v-html="marked.parse(data.footer.legal)" />
          <div class="mt-12 flex flex-col gap-12 font-bold sm:flex-row">
            <TheLink
              v-if="store.region?.id === 'fTo46Ty8To6ukIQsBTRhPQ'"
              text="Zum ausführlichen Haftungsauschluss"
              link="/haftungsausschluss"
              hide-arrow
              secondary
              compact
            />
            <span v-if="store.region?.id === 'fTo46Ty8To6ukIQsBTRhPQ'" class="hidden text-blue-dark/30 sm:block">|</span>
            <TheLink
              :text="data.footer.dataProtection"
              link="/data-protection"
              hide-arrow
              secondary
              compact
            />
            <span class="hidden text-blue-dark/30 sm:block">|</span>
            <TheLink
              :text="data.footer.cookies"
              link="/cookies"
              hide-arrow
              secondary
              compact
            />
          </div>
        </div>
      </div>
      <!-- Impring and copyright -->
      <div class="mt-72 text-blue-dark/20 xl:mt-0 xl:self-end">
        <div class="flex gap-12 font-bold">
          <TheLink
            :text="data.footer.imprint"
            link="/Imprint"
            hide-arrow
            secondary
            compact
          />
          <span>|</span>
          <TheLink
            :text="data.footer.privacy"
            link="/privacy"
            hide-arrow
            secondary
            compact
          />
        </div>
        <p class="mt-24 text-blue-dark/30 sm:mt-16">
          {{ data.footer.copyrightText }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

import { marked } from 'marked'
import { StructuredText } from 'vue-datocms'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import footer from '../graphql/Footer'
import { useWebsiteStore } from '../store/store'
import type { DynamicLogo } from '#build/components'

defineProps({
  backgroundColor: {
    type: String,
    default: 'gray'
  }
})

const store = useWebsiteStore()
const pages = computed(() => store.pages?.filter((item) => {
  return item._modelApiKey !== 'home_page'
}))

const footerQuery = footer(store.getCurrentLocale)
const { data } = await useGraphqlQuery(footerQuery)
const { data: allRegionResponse } = await useGraphqlQuery(`query {
  allRegions {
    id
    url
  }
}`)
</script>

<style>
.footer-prose a {
  @apply text-blue-light underline font-semibold hover:text-blue-darker
}
</style>
