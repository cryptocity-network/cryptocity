<template>
  <footer
    v-if="footerData"
    class="px-24 pb-24 pt-48 text-14 !text-blue-dark lg:p-72"
    :class="`bg-${backgroundColor}`"
  >
    <div
      class="max-w-screen mx-auto grid w-full max-w-[1392px] grid-cols-1 grid-rows-[min-content_min-content_min-content] xl:grid-rows-[min-content_min-content]"
      :class="!onGlobalPage
        ? 'xl:grid-cols-[min-content_1fr] xl:gap-x-72 xl:gap-y-64 '
        : ''
      "
    >
      <div class="col-span-2 row-span-1 mb-48 flex w-full flex-col items-center gap-12 rounded-8 border-1 border-blue-darker/20 p-20 text-center text-blue-dark/60 xl:mb-24">
        <div class="flex gap-8">
          <img v-for="crypto in region?.supportedCryptocurrencies" v-show="region?.supportedCryptocurrencies" :key="crypto.abbreviation" :src="crypto.icon?.url" :alt="crypto.fullName" class="h-26">
        </div>
        <p class="text-14 xl:text-16">
          {{ t('We accept') }}
          <span v-for="(crypto, i) in region?.supportedCryptocurrencies || []" :key="crypto.abbreviation">
            {{ crypto.fullName }} ({{ crypto.abbreviation }})<span v-if="i < (region?.supportedCryptocurrencies || []).length - 2">, </span>
            <span v-if="i === (region?.supportedCryptocurrencies || []).length - 2"> & </span>
          </span>
        </p>
      </div>
      <!-- LINKS -->
      <ul
        class="col-span-2 row-start-2 xl:col-span-1"
        :class="!onGlobalPage
          ? 'flex flex-wrap items-center gap-16 xl:flex-col xl:items-start'
          : 'order-2 flex gap-16'"
      >
        <li
          v-for="(item, index) in pages"
          :key="String(item._modelApiKey)"
          class="w-fit last:border-r-0 child:rounded-0 child:border-r-1 child:border-r-black/10 child:!pr-12 child:xl:border-r-0"
          :class="{
            'child:!border-r-0 ': pages && index === pages.length -1
          }"
        >
          <TheLink
            v-if="item._modelApiKey !== 'home_page'"
            style="text-wrap: nowrap"
            :text="item.navigationLabel"
            :url="getRouteName(item._modelApiKey)"
            compact
            hide-arrow
          />
        </li>
      </ul>
      <!-- Logos and Text -->
      <div class="col-span-2 row-start-3 mt-72 flex flex-col gap-32 xl:col-span-1 xl:row-span-2 xl:mt-0">
        <div class="flex flex-wrap gap-24 ">
          <nuxt-link
            v-for="footerLogo in footerLogos"
            :key="footerLogo.id"
            :to="footerLogo.url"
            :aria-label="footerLogo.brandName"
            class="opacity-50 transition-opacity hover:opacity-100 focus:opacity-100"
          >
            <DynamicLogo
              text-color="#1F2348"
              logo-color="#1F2348"
              class="h-32"
              ignore-region
              :brand-name="footerLogo.brandName"
              :registered="footerLogo.brandIntellectualPropertySymbols === 'registered'"
              :trademark="footerLogo.brandIntellectualPropertySymbols === 'trademark'"
            />
          </nuxt-link>
        </div>
        <div v-if="region?.socialLinks?.facebook || region?.socialLinks?.facebook || region?.socialLinks?.linkedIn || region?.socialLinks?.whatsapp || region?.socialLinks?.telegram || region?.socialLinks?.youtube || region?.socialLinks?.discord || region?.socialLinks?.instagram" class="flex flex-col">
          <div class="mb-12 text-15 font-bold text-blue-dark/60">
            Join our Social Channels!
          </div>
          <ul v-if="region?.socialLinks" class="flex gap-24 sm:gap-32">
            <li
              v-if="region?.socialLinks.twitter"
            >
              <SocialLink
                :social-media="{
                  name: 'twitter',
                  key: 'twitter',
                  url: `${region.socialLinks.twitter}`,
                }"
              />
            </li>
            <li
              v-if="region?.socialLinks.facebook"
            >
              <SocialLink
                :social-media="{
                  name: 'facebook',
                  key: 'facebook',
                  url: `${region.socialLinks.facebook}`,
                }"
              />
            </li>
            <li
              v-if="region?.socialLinks.instagram"
            >
              <SocialLink
                :social-media="{
                  name: 'instagram',
                  key: 'instagram',
                  url: `${region.socialLinks.instagram}`,
                }"
              />
            </li>
            <li
              v-if="region?.socialLinks.pintrest"
            >
              <SocialLink
                :social-media="{
                  name: 'pintrest',
                  key: 'pintrest',
                  url: `${region.socialLinks.pintrest}`,
                }"
              />
            </li>
            <li
              v-if="region?.socialLinks.youtube"
            >
              <SocialLink
                :social-media="{
                  name: 'youtube',
                  key: 'youtube',
                  url: `${region.socialLinks.youtube}`,
                }"
              />
            </li>
            <li
              v-if="region?.socialLinks.linkedIn"
            >
              <SocialLink
                :social-media="{
                  name: 'linkedin',
                  key: 'linked_in',
                  url: `${region.socialLinks.linkedIn}`,
                }"
              />
            </li>
            <li
              v-if="region?.socialLinks.tikTok"
            >
              <SocialLink
                :social-media="{
                  name: 'tiktok',
                  key: 'tiktok',
                  url: `${region.socialLinks.tikTok}`,
                }"
              />
            </li>
            <li
              v-if="region?.socialLinks.telegram"
            >
              <SocialLink
                :social-media="{
                  name: 'telegram',
                  key: 'telegram',
                  url: `${region.socialLinks.telegram}`,
                }"
              />
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-8 text-blue-dark/60 ">
          <StructuredText
            class="footer-prose"
            :data="footerData.wpig"
          />
          <div v-html="marked.parse(footerData.legal)" />
          <div class="mt-12 flex flex-col gap-12 font-bold sm:flex-row">
            <TheLink
              v-if="region?.id === 'fTo46Ty8To6ukIQsBTRhPQ'"
              :text="footerData.haftungsausschluss"
              url="/haftungsausschluss"
              hide-arrow
              secondary
              compact
            />
            <span v-if="region?.id === 'fTo46Ty8To6ukIQsBTRhPQ'" class="hidden text-blue-dark/30 sm:block">|</span>
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
        </div>
        <p class="mt-16 text-blue-dark/30 sm:mt-16">
          {{ footerData.copyrightText }}
        </p>
      </div>
    </div>
    <CookiesBanner v-if="locale" />
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
import type { Footer } from '@/types/dato-models/Footer'

const { locale, t } = useI18n()

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

const { pages: _pages, region } = storeToRefs(useWebsiteStore())
const pages = computed(() => _pages.value?.filter((item) => {
  return item._modelApiKey !== 'home_page'
}))

const getRouteName = (name: string) => {
  switch (name) {
    case 'home_page':
      return '/'
    case 'beginner_page':
      return '/beginners'
    case 'merchant_page':
      return '/merchants'
    case 'news_page':
      return '/news'
    case 'network_page':
      return '/network'
    case 'about_page':
      return '/about'
    case 'contact_page':
      return '/contact'
    default:
      return '/'
  }
}

interface FooterResponse {
  footer: Footer,
  deFooter: Footer,
  footerLogoList: {
    footerLogos: [
    {
      id: string,
      brandName: string,
      url: string,
      brandIntellectualPropertySymbols: string
    }
  ]}
}

const footerQuery = FooterQuery(locale.value)
const { data: { value: response } } = await useGraphqlQuery(footerQuery) as AsyncData<FooterResponse, RTCError>

const footerLogos = computed(() => {
  return response.footerLogoList.footerLogos
})

const footerData = computed(() => {
  if (response) {
    return checkGermanyOrRestOfWorld() ? response.deFooter : response.footer
  } else {
    return null
  }
})
</script>

<style>
.footer-prose a {
  @apply text-blue-light underline font-semibold hover:text-blue-darker;
  word-break: break-word;
}
</style>
