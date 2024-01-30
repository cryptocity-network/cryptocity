<template>
  <section v-if="data" class="bg-gray py-80">
    <div class="prose">
      <h2>{{ data.cookie.title }}</h2>
      <div v-html="marked.parse(data.cookie.text)" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import cookies from '../graphql/Cookies'
import { useWebsiteStore } from '../store/store'

const store = useWebsiteStore()
const cookiesQuery = cookies(store.getCurrentLocale)
const { data } = await useGraphqlQuery(cookiesQuery)
</script>

<style></style>
