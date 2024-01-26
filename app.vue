<template>
  <div
    v-if="fetchedData"
    class=" max-w-screeen flex min-h-screen flex-col"
  >
    <TheNavigation :key="String(store.localization.userSelectedLocale)" />
    <NuxtPage />
    <TheFooter :key="String(store.localization.userSelectedLocale)" />
  </div>
  <div v-else>
    <LoadingState />
  </div>
</template>

<script lang="ts" setup>

import { computed } from 'vue'
import { useWebsiteStore } from './store/store'
const store = useWebsiteStore()
store.setNavigation()
const fetchedData = computed(() => { return store.getCurrentCountry })
</script>
