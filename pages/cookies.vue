<template>
  <section v-if="response" class="bg-gray py-80">
    <div class="prose">
      <h2>{{ response.cookie.title }}</h2>
      <div v-html="marked.parse(response.cookie.text)" />
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
  }
}
const store = useWebsiteStore()
const cookiesQuery = cookies(store.getCurrentLocale)
const { data: { value: response } } = await useGraphqlQuery(cookiesQuery) as AsyncData<CookiesResponse, RTCError>
</script>

<style></style>
