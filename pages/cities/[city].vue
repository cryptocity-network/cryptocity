<template>
  <div>
    <section
      v-for="(component, index) in data.city"
      :key="component[0]"
      :class="{
        '-mt-160': index > 0
      }"
    >
      <BlockRenderer
        :componentName="component[0]._modelApiKey"
        :data="component[0]"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '../../composables/useGraphqlQuery'
import city from '../../graphql/city'
import { useWebsiteStore } from '../../store/store'
const store = useWebsiteStore()

defineProps({
  country: {
    type: Object,
    default: null
  }
})
const route = useRoute()
console.log(route)
const cityName = route.params.city.charAt(0).toUpperCase() + route.params.city.slice(1)
const cityQuery = city(cityName, store.localization.userSelectedLocale)
const {data, error} = await useGraphqlQuery({ query: cityQuery })
</script>
