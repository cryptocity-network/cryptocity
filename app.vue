<template>
  <div
    v-if="domainId"
    class=" bg-gray"
  >
    <TheNavigation />
    <NuxtPage />
    <TheFooter />
  </div>
  <div v-else>
    Loading state
  </div>
</template>

<script lang="ts" setup>

import { useWebsiteStore } from './store/store'

const store = useWebsiteStore()
store.setNavigation()
const domainId = store.getDomainId
console.log('APP', domainId)

</script>
