<template>
  <section v-if="response" class="bg-white py-80">
    <div class="prose">
      <h3>{{ response.haftungsausschluss.title }}</h3>
      <StructuredText class="prose" :response="response.haftungsausschluss.content" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { StructuredText } from 'vue-datocms'
import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import haftungsausschluss from '@/graphql/pages/Haftungsausschluss'
import { useWebsiteStore } from '@/store/store'

interface Haftungsausschluss {
  haftungsausschluss:{
    title: string,
    content: string
  }
}
const store = useWebsiteStore()
const haftungsausschlussQuery = haftungsausschluss(store.getCurrentLocale)
const { data: { value: response } } = await useGraphqlQuery(haftungsausschlussQuery) as AsyncData<Haftungsausschluss, RTCError>
</script>

<style></style>
