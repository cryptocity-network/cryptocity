<template>
  <div
    v-if="fetchedData"
    class="max-w-screeen flex min-h-screen flex-col"
  >
    <TheNavigation
      :key="String(store.localization.userSelectedLocale)"
    />
    <NuxtPage />
    <TheFooter
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
store.setNavigation()
const fetchedData = computed(() => { return store.getCurrentCountry })
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
