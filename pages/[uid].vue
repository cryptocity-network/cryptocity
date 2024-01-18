<template>
  <section
    v-for="(component, index) in data[`${route.params.uid}Page`]"
    :key="component[0].id"
    :class="{
      '-mt-160': index > 0
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

const props = defineProps({
  country: {
    type: Object,
    default: null
  }
})
const route = useRoute()
let query = null
switch (route.params.uid) {
  case 'merchant':
    query = merchantPage(props.country.id)
    break;
  case 'beginner':
    query = beginnerPage(props.country.id)
    break;
    case 'about':
    query = aboutPage(props.country.id)
    break;
    case 'network':
    query = networkPage(props.country.id)
    break;
  default:
    break;
}
console.log(query)
const {data, error} = await useGraphqlQuery({ query: query })
</script>
