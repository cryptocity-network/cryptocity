<template>
  <section v-if="data" class="bg-gray py-80">
    <div class="prose">
      <h2>{{ data.haftungsausschluss.title }}</h2>
      <StructuredText class="prose" :data="data.haftungsausschluss.content" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { StructuredText } from 'vue-datocms'
import useGraphqlQuery from '../composables/useGraphqlQuery'
import haftungsausschluss from '../graphql/Haftungsausschluss'
import { useWebsiteStore } from '../store/store'

const store = useWebsiteStore()
const haftungsausschlussQuery = haftungsausschluss(store.getCurrentLocale)
const { data } = await useGraphqlQuery(haftungsausschlussQuery)
</script>

<style></style>
