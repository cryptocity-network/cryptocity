<template>
  <component
    v-for="(component, index, k) in data.city"
    :key="component.id"
    :componentName="component._modelApiKey"
    :data="component"
    :index="k"
    :is="component._modelApiKey.replace(/(^|_)./g, s => s.slice(-1).toUpperCase())"
  />
</template>

<script lang="ts" setup>
import useGraphqlQuery from '../../composables/useGraphqlQuery'
import city from '../../graphql/city'
import { useWebsiteStore } from '../../store/store'
const store = useWebsiteStore()

const route = useRoute()
console.log(route)
const cityName = route.params.city.charAt(0).toUpperCase() + route.params.city.slice(1)
const cityQuery = city(cityName, store.localization.userSelectedLocale)
const {data, error} = await useGraphqlQuery({ query: cityQuery })
</script>
