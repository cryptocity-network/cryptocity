<template>
  <section
    v-for="(component, index) in data.homePage"
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
import homePage from '../graphql/homePage'
const props = defineProps({
  country: {
    type: Object,
    default: null
  }
})

const homepageQuery = homePage(props.country.id)
const {data, error} = await useGraphqlQuery({ query: homepageQuery })
</script>
