<template>
  <section v-if="data" class="bg-gray py-80">
    <div class="prose">
      <h2>{{ data.dataProtection.title }}</h2>
      <div v-html="marked.parse(data.dataProtection.text)" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import dataProtection from '../graphql/DataProtection'
import { useWebsiteStore } from '../store/store'

const store = useWebsiteStore()
const dataProtectionQuery = dataProtection(store.getCurrentLocale)
const { data } = await useGraphqlQuery({ query: dataProtectionQuery })
</script>

<style></style>
