<template>
  <div
    v-for="(component, i) in data.homepage"
    :key="component[0]._modelApiKey + Math.random()"
  >
    <BlockRenderer
      :componentName="component[0]._modelApiKey"
      :data="component[0]"
    />
  </div>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '../composables/useGraphqlQuery'
import homepage from '../graphql/homepage'
const props = defineProps({
  domain: {
    type: Object,
    default: null
  }
})

const homepageQuery = homepage(props.domain.id)
const {data, error} = await useGraphqlQuery({ query: homepageQuery })
</script>
