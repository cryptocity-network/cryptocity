<template>
  <section v-if="response" class="bg-white py-80">
    <div class="prose">
      <h3>{{ response.dataProtection.title }}</h3>
      <div v-html="marked.parse(response.dataProtection.text)" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import dataProtection from '@/graphql/pages/DataProtection'
import { useWebsiteStore } from '@/store/store'
interface DataProtectionResponse {
  dataProtection:{
    title: string,
    text: string
  }
}
const store = useWebsiteStore()
const dataProtectionQuery = dataProtection(store.getCurrentLocale)
const { data: { value: response } } = await useGraphqlQuery(dataProtectionQuery) as AsyncData<DataProtectionResponse, RTCError>
</script>

<style></style>
