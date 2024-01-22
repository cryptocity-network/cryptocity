<template>
  <section
    v-for="(component, index) in data[`${route.params.uid}Page`]"
    :key="component[0].id"
    class="pt-104 pb-160"
    :class="{
      '-mt-160 !pb-0': index > 0
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
const route = useRoute()
let query = null
switch (route.params.uid) {
  case 'merchant':
    query = merchantPage(countryId)
    break;
  case 'beginner':
    query = beginnerPage(countryId)
    break;
    case 'about':
    query = aboutPage(countryId)
    break;
    case 'network':
    query = networkPage(countryId)
    break;
  default:
    break;
}
console.log(query)
const {data, error} = await useGraphqlQuery({ query: query })
</script>
