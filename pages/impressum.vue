pages/cookies.vue<template>
  <section v-if="data" class="bg-gray py-80">
    <div class="prose">
      <h2>{{ data.impressum.title }}</h2>
      <div class="grid grid-flow-row grid-cols-2 gap-16">
        <div v-for="asset in data.impressum.assets" :key="asset.id" class="size-full">
          <img class="size-full object-contain object-center" :src="asset.url" :alt="asset.alt">
        </div>
      </div>
      <div v-html="marked.parse(data.impressum.text)" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import impressum from '../graphql/Impressum'
import { useWebsiteStore } from '../store/store'

const store = useWebsiteStore()
const impressumQuery = impressum(store.getCurrentLocale)
const { data } = await useGraphqlQuery(impressumQuery)
</script>

<style></style>
