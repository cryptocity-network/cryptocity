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
import CustomStructuredText from '~/components/block/StructuredText/CustomStructuredText.vue'
import useGraphqlQuery from '@/composables/useGraphqlQuery'
import dataProtection from '@/graphql/pages/DataProtection'
interface DataProtectionResponse {
  dataProtection:{
    title: string,
    content: any
  },
  deDataProtection:{
    title: string,
    content: any
  }
}
const dataProtectionQuery = dataProtection(useI18n().locale.value)
const { data: { value: response } } = await useGraphqlQuery(dataProtectionQuery) as AsyncData<DataProtectionResponse, RTCError>

const data = computed(() => {
  if (checkGermanyOrRestOfWorld()) {
    return response.deDataProtection
  } else {
    return response.dataProtection
  }
})
</script>
