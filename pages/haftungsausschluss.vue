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
import haftungsausschluss from '@/graphql/pages/Haftungsausschluss'

interface Haftungsausschluss {
  haftungsausschluss:{
    title: string,
    content: any
  },
  deHaftungsausschluss:{
    title: string,
    content: any
  }
}
const haftungsausschlussQuery = haftungsausschluss(useI18n().locale.value)
const { data: { value: response } } = await useGraphqlQuery(haftungsausschlussQuery) as AsyncData<Haftungsausschluss, RTCError>

const data = computed(() => {
  if (checkGermanyOrRestOfWorld()) {
    return response.deHaftungsausschluss
  } else {
    return response.haftungsausschluss
  }
})
</script>

<style></style>
