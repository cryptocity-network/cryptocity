<template>
  <div v-if="data">

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
  </div>
</template>

<script lang="ts" setup>
import useGraphqlQuery from '../composables/useGraphqlQuery'
import homePage from '../graphql/homePage'
import { useWebsiteStore } from '../store/store'
const store = useWebsiteStore()

const homepageQuery = homePage(store.country.id, store.getCurrentLocale)
const {data, error} = await useGraphqlQuery({ query: homepageQuery })
</script>
