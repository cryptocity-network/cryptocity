pages/cookies.vue<template>
  <section v-if="response" class="bg-white py-80">
    <div class="prose">
      <h3>{{ response.impressum.title }}</h3>
      <div class="grid grid-flow-row grid-cols-2 gap-16">
        <div v-for="asset in response.impressum.assets" :key="asset.id" class="size-full">
          <img class="size-full object-contain object-center" :src="asset.url" :alt="asset.alt">
        </div>
      </div>
      <div v-html="marked.parse(response.impressum.text)" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import impressum from '@/graphql/pages/Impressum'
import { useWebsiteStore } from '@/store/store'

interface Impressum {
  impressum: {
    title: string,
    text: string,
    assets: [
      {
        url: string,
        alt?: string,
        id: string
      }
    ]
  }
}

const store = useWebsiteStore()
const impressumQuery = impressum(store.getCurrentLocale)
const { data: { value: response } } = await useGraphqlQuery(impressumQuery) as AsyncData<Impressum, RTCError>
</script>

<style></style>
