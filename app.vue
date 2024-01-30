<template>
  <div
    v-if="pageData || globalData"
    class="max-w-screeen flex min-h-screen flex-col"
  >
    <TheNavigation
      :key="String(store.localization.userSelectedLocale)"
      :on-global-page="convertToBoolean(useRuntimeConfig().public.IS_HOME)"
      :tag-line="globalData?.tagLine"
    />
    <NuxtPage v-if="!onGlobalPage" />
    <GlobalCarousel v-else />
    <TheFooter
      v-if="!onGlobalPage"
      :key="String(store.localization.userSelectedLocale)"
    />
  </div>
  <div v-else>
    <LoadingState />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useWebsiteStore } from './store/store'
const store = useWebsiteStore()

const onGlobalPage = useRuntimeConfig().public.IS_HOME

function convertToBoolean (input: string | boolean): boolean | undefined {
  if (typeof input === 'boolean') {
    return input
  }
  return input === 'true'
}
store.setNavigation(convertToBoolean(onGlobalPage))

const pageData = computed(() => {
  if (!onGlobalPage) {
    return store.getCurrentCountry
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
  filter: blur(1rem);
}
</style>
