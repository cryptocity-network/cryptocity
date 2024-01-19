<template>
  <div
    v-if="fetchedData"
    :key="store.localization.userSelectedLocale"
    class=" max-w-screeen flex min-h-screen flex-col bg-gray"
  >
    <TheNavigation />
    <NuxtPage />
    <TheFooter />
  </div>
  <div v-else>
    <LoadingState />
  </div>
</template>

<script lang="ts" setup>

import { useWebsiteStore } from './store/store'
import { computed } from 'vue'
const store = useWebsiteStore()
store.setNavigation(false)
const fetchedData = computed(() => { return store.getCurrentCountry })
</script>
