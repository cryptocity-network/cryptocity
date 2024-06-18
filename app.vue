<template>
  <transition name="page" mode="out-in" appear>
    <div
      class="max-w-screeen flex flex-col"
    >
      <TheNavigation
        :key="keyTrigger"
        :on-global-page="convertToBoolean(useRuntimeConfig().public.IS_GLOBAL_SITE)"
        :tag-line="globalData?.tagLine"
        :contact-button-label="globalData?.contactButtonLabel"
      />
      <main class="">
        <NuxtPage />
      </main>
      <TheFooter
        v-if="!onGlobalPage"
        :key="`Footer-${String(keyTrigger)}`"
        :class="{ 'pt-120': onGlobalPage }"
        :on-global-page="convertToBoolean(useRuntimeConfig().public.IS_GLOBAL_SITE)"
        :background-color="onGlobalPage ? 'white' : 'gray'"
      />
      <!-- <PreviewModeControls /> -->
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useWebsiteStore } from './store/store'
import type { Page } from './types/dato-models/Page'
import type { DatoRegionResponse } from './types/dato-api-responses/Region'
const store = useWebsiteStore()
const onGlobalPage = useRuntimeConfig().public.IS_GLOBAL_SITE
const route = useRoute()

await useAsyncData('setNavigation', () => store.setNavigation(convertToBoolean(onGlobalPage)).then(() => true))
const keyTrigger = ref(0)
const { locale } = useI18n()
watch(locale, () => {
  updateNavigation()
})
const pageFields = (showNavLabel = true) => `
          id
          _modelApiKey
          ${showNavLabel ? 'navigationLabel' : ''}
        `

        interface RegionResponse {
          data: DatoRegionResponse
        }
async function updateNavigation () {
  const QUERY = `
    query {
      region(filter: {id: {eq: "${useRuntimeConfig().public.DATO_REGION_ID}"}}, locale: ${locale.value}) {
        _allReferencingHomePages {
          ${pageFields(false)}
        }
        _allReferencingMerchantPages {
          ${pageFields()}
        }
        _allReferencingBeginnerPages {
          ${pageFields()}
        }
        _allReferencingNetworkPages {
          ${pageFields()}
        }
        _allReferencingNewsPages {
          ${pageFields()}
        }
        _allReferencingAboutPages {
          ${pageFields()}
        }
        _allReferencingContactPages {
          ${pageFields()}
        }
      }
    }`
  const body = await $fetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${useRuntimeConfig().public.DATO_TOKEN}`,
      'X-environment': 'main'
    },
    body: {
      query: QUERY
    }
  }) as RegionResponse

  store.pages = []
  for (const property in body.data.region) {
    if (property.includes('Pages')) {
      const value = body.data.region[property as keyof typeof body.data.region] as Page[]
      if (typeof value === 'object' && value[0]) {
        store.pages?.push((value as Page[])[0])
      }
    }
  }
  keyTrigger.value++
}

function convertToBoolean (input: string | boolean): boolean | undefined {
  if (typeof input === 'boolean') {
    return input
  }
  return input === 'true'
}

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
  if (onGlobalPage) { return 'CryptoCity' }
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
