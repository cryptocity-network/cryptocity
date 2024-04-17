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
import CustomStructuredText from '~/components/block/StructuredText/CustomStructuredText.vue'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import cookies from '@/graphql/pages/Cookies'
interface CookiesResponse {
  cookie:{
    title: string,
    content: any
  },
  deCookie:{
    title: string,
    content: any
  }
}
const cookiesQuery = cookies(useI18n().locale.value)
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
