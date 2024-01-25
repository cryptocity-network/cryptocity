<template>
  <TheNavigation />
  <component
    :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
    v-for="(component, index, k) in data.homePage"
    :key="component.id"
    :component-name="component._modelApiKey"
    :data="component"
    :index="k"
  />
  <TheFooter />
</template>

<script lang="ts" setup>
import useGraphqlQuery from '../composables/useGraphqlQuery'
import homePage from '../graphql/homePage'
import { useWebsiteStore } from '../store/store'
const store = useWebsiteStore()

const homepageQuery = homePage(store.country?.id, store.getCurrentLocale)
const { data, error } = await useGraphqlQuery({ query: homepageQuery })
console.warn('QUERY ERROR', error)
</script>
