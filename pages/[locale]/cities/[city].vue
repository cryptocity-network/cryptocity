<template>
  <main v-if="!error && data">
    <template
      v-for="(component, index) in components"
      :key="typeof component === 'string' ? 'id' : component?.id"
    >
      <component
        :is="component._modelApiKey.replace(/(^|_)./g, (s: string) => s.slice(-1).toUpperCase())"
        v-if="component && component._modelApiKey"
        :component-name="component._modelApiKey"
        :data="component"
        :index="index"
        :city-id="data.city.id"
        :background-color="backgroundColorArray?.[index]"
      />
    </template>
  </main>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import useGraphqlQuery from '@/composables/useGraphqlQuery.js'
import city from '@/graphql/pages/City.js'
import type { CityData, Component } from '@/types/index'
import { useWebsiteStore } from '@/store/store'

const store = useWebsiteStore()
const route = useRoute()
if (route.params.locale !== store.getCurrentLocale) {
  store.setLocale(route.params.locale as string)
}
const param = route.params.city as string
const cityName = param.charAt(0).toUpperCase() + route.params.city.slice(1)
const cityQuery = city(cityName, store.getCurrentLocale)
const { data, error } = await useGraphqlQuery(cityQuery) as AsyncData<CityData, RTCError>

const backgroundColorArray = computed(() => {
  if (data) {
    return Object.values(data.value.city.backgroundColors)
  }
  return null
})

const components = computed(() => {
  return filterCityResponseForComponents(data.value) as Array<Component>
})
</script>
