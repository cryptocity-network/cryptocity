<template>
  <footer
    class="relative bg-gray px-32 text-14 !text-blue-dark "
  >
    <div class="max-w-screen mx-auto grid w-full grid-cols-1 gap-40 py-40 md:px-64 md:pb-80 xl:grid-cols-[min-content_1fr] xl:gap-80 xl:px-72 xl:pb-104 2xl:px-136 2xl:pb-136">
      <!-- LINKS -->
      <ul
        class="flex gap-12 xl:flex-col"
      >
        <LocalizationDropdown no-padding />
        <li
          v-for="item in pages"
          :key="String(item._modelApiKey)"
        >
          <NavigationLink
            v-if="item._modelApiKey !== 'home_page'"
            :text="item.navigationLabel"
            :link="'/' + item.slug"
            :page-model="item._modelApiKey.replace(/_.*/, '')"
            compact
            hide-arrow
          />
        </li>
      </ul>
      <!-- Logos and Text -->
      <div class="flex flex-col gap-40 xl:row-span-2">
        <div class="flex gap-16">
          <nuxt-link
            v-for="country in allCountryResponse.allCountries"
            :key="country.id"
            :to="country.url"
            class="opacity-50 transition-opacity hover:opacity-100 focus:opacity-100"
          >
            <DynamicLogo text-color="#1F2348" logo-color="#1F2348" class="h-72" :custom-url="country.url" />
          </nuxt-link>
        </div>
        <div class="flex flex-col gap-8 text-blue-dark opacity-60 ">
          <h5 class="font-bold uppercase">
            ⚠ {{ data.footer.title }} ⚠
          </h5>
          <a href="">Detailed Disclaimer</a>
          <div v-html="marked.parse(data.footer.legal)" />

          <div class="mb-4 flex gap-12 font-bold">
            <nuxt-link to="/data-protection">
              Data Protection
            </nuxt-link>
            <span class="text-blue-dark/30">|</span>
            <nuxt-link to="/cookies">
              Cookies
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Impring and copyright -->
      <div class="text-blue-dark/60 xl:self-end">
        <div class="mb-4 flex gap-12 font-bold">
          <nuxt-link to="/impressum">
            Imprint
          </nuxt-link>
          <span>|</span>
          <nuxt-link to="/privacy">
            Privacy
          </nuxt-link>
        </div>
        <p class="text-blue-dark/30">
          {{ data.footer.copyrightText }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

import { marked } from 'marked'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import footer from '../graphql/Footer'
import { useWebsiteStore } from '../store/store'
import type { DynamicLogo } from '#build/components'

const store = useWebsiteStore()
const pages = computed(() => store.pages?.filter((item) => {
  return item._modelApiKey !== 'home_page'
}))

const footerQuery = footer(store.getCurrentLocale)
const { data } = await useGraphqlQuery(footerQuery)
const { data: allCountryResponse } = await useGraphqlQuery(`query {
  allCountries {
    id
    url
  }
}`)
</script>

<style></style>
