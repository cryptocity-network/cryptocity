pages/cookies.vue<template>
  <section v-if="data" class="bg-white py-80">
    <div class="prose">
      <h3>{{ data.title }}</h3>
      <div class="grid grid-flow-row grid-cols-1 gap-24 pb-32 pt-56 sm:grid-cols-2">
        <div v-for="asset in data.assets" :key="asset.id" class="size-full">
          <DatoImage class="size-full object-contain object-center" :image="asset" />
        </div>
      </div>
      <div v-html="marked.parse(data.text)" />
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
  deImpressum: {
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

const data = computed(() => {
  if (checkGermanyOrRestOfWorld()) {
    return response.deImpressum
  } else {
    return response.impressum
  }
})
</script>

<style></style>
