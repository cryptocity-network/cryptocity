<template>
  <section v-if="data" class="bg-white py-80">
    <div class="prose">
      <h3>{{ data.title }}</h3>
      <CustomStructuredText
        v-if="data.content"
        :data="data.content"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { AsyncData } from '#app'
import CustomStructuredText from '~/components/datocms-blocks/StructuredText/CustomStructuredText.vue'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import cookies from '@/graphql/pages/Cookies'
import { useWebsiteStore } from '@/store/store'
interface CookiesResponse {
  cookie:{
    title: string,
    content: any,
    text: string
  },
  deCookie:{
    title: string,
    content: any,
    text: string
  }
}
const store = useWebsiteStore()
const cookiesQuery = cookies(store.getCurrentLocale)
const { data: { value: response } } = await useGraphqlQuery(cookiesQuery) as AsyncData<CookiesResponse, RTCError>

const data = computed(() => {
  if (checkGermanyOrRestOfWorld()) {
    return response.deCookie
  } else {
    return response.cookie
  }
})
</script>

<style></style>
