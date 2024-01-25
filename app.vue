<template>
  <div
    v-if="fetchedData"
    :key="String(store.localization.userSelectedLocale)"
    class=" max-w-screeen flex min-h-screen flex-col"
  >
    <NuxtPage />
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
