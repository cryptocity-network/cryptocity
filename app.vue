<template>
  <div
    v-if="fetchedData"
    class=" bg-gray"
  >
    <TheNavigation />
    <NuxtPage :domain="fetchedData" />
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
store.setNavigation()
const fetchedData = computed(() => { return store.getCurrentDomain })
</script>
