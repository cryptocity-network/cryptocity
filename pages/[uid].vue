<template>
  <section
    section
    v-for="(component, index) in data[`${route.params.uid}Page`]"
    :key="component[0].id"
    class="pt-104 pb-160"
    :class="{
      '!pb-0': index > 0
    }"
  >
    <BlockRenderer
      :componentName="component[0]._modelApiKey"
      :data="component[0]"
    />
  </section>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '../composables/useGraphqlQuery'
import merchantPage from '../graphql/merchantPage'
import beginnerPage from '../graphql/beginnerPage'
import aboutPage from '../graphql/aboutPage'
import networkPage from '../graphql/networkPage'
import { useWebsiteStore } from '~/store/store'

const store = useWebsiteStore()
const countryId = store.country.id
const locale =  store.getCurrentLocale
const route = useRoute()
let query = null
switch (route.params.uid) {
  case 'merchant':
    query = merchantPage(countryId, locale)
    break;
  case 'beginner':
    query = beginnerPage(countryId, locale)
    break;
    case 'about':
    query = aboutPage(countryId, locale)
    break;
    case 'network':
    query = networkPage(countryId, locale)
    break;
  default:
    break;
}
console.log(query)
const {data, error} = await useGraphqlQuery({ query: query })
</script>

<style>
  section + section {
    @apply -mt-160
  }
</style>