<template>
  <main v-if="!error && data" class="min-h-screen">
    <template
      v-for="(component, index, k) in data.city"
      :key="typeof component === 'string' ? 'id' : component?.id"
    >
      <component
        :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        v-if="component && component._modelApiKey"
        :component-name="component._modelApiKey"
        :data="component"
        :index="k"
        :city-id="data.city.id"
      />
    </template>
  </main>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '@/composables/useGraphqlQuery.js'
import city from '@/graphql/City.js'
import { useWebsiteStore } from '@/store/store'
const store = useWebsiteStore()
const route = useRoute()

const param = route.params.city as string
const cityName = param.charAt(0).toUpperCase() + route.params.city.slice(1)
const cityQuery = city(cityName, store.getCurrentLocale)
const { data, error } = await useGraphqlQuery(cityQuery)
</script>
