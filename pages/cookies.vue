<template>
  <section v-if="data" class="bg-white py-80">
    <div class="prose">
      <h3>{{ data.title }}</h3>
      <div v-html="marked.parse(data.text)" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import type { AsyncData } from '#app'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import cookies from '@/graphql/pages/Cookies'
import { useWebsiteStore } from '@/store/store'
interface CookiesResponse {
  cookie:{
    title: string,
    text: string
  },
  deCookie:{
    title: string,
    text: string
  }
}
const store = useWebsiteStore()
const cookiesQuery = cookies(store.getCurrentLocale)
const { data: { value: response } } = await useGraphqlQuery(cookiesQuery) as AsyncData<CookiesResponse, RTCError>

const data = computed(() => {
  if (checkGermanyOrRestOfWorld()) {
    return response.deCookie
  } else {
    return response.cookie
  }
})
</script>

<style></style>
