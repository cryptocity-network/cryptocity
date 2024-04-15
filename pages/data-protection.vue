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
import type { AsyncData } from 'nuxt/app'
import CustomStructuredText from '~/components/datocms-blocks/StructuredText/CustomStructuredText.vue'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import dataProtection from '@/graphql/pages/DataProtection'
import { useWebsiteStore } from '@/store/store'
interface DataProtectionResponse {
  dataProtection:{
    title: string,
    content: any,
    text: string
  },
  deDataProtection:{
    title: string,
    content: any,
    text: string
  }
}
const store = useWebsiteStore()
const dataProtectionQuery = dataProtection(store.getCurrentLocale)
const { data: { value: response } } = await useGraphqlQuery(dataProtectionQuery) as AsyncData<DataProtectionResponse, RTCError>

const data = computed(() => {
  if (checkGermanyOrRestOfWorld()) {
    return response.deDataProtection
  } else {
    return response.dataProtection
  }
})
</script>
