pages/cookies.vue<template>
  <section v-if="data" class="bg-white py-80">
    <div class="prose">
      <h3>{{ data.title }}</h3>
      <div v-if="data.assets.length > 0" class="grid grid-flow-row grid-cols-1 gap-24 pb-32 pt-56 sm:grid-cols-2">
        <div v-for="asset in data.assets" :key="asset.id" class="size-full">
          <DatoImage class=" size-full h-[70px] object-contain object-left" :image="asset" />
        </div>
      </div>
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
import impressum from '@/graphql/pages/Impressum'

interface Impressum {
  impressum: {
    title: string,
    content: any,
    assets: [
      {
        url: string,
        alt?: string,
        id: string
      }
    ]
  }
  deImpressum: {
    title: string,
    content: any,
    assets: [
      {
        url: string,
        alt?: string,
        id: string
      }
    ]
  }
}

const impressumQuery = impressum(useI18n().locale.value)

const { data: { value: response } } = await useGraphqlQuery(impressumQuery) as AsyncData<Impressum, RTCError>

const data = computed(() => {
  if (checkGermanyOrRestOfWorld()) {
    return response.deImpressum
  } else {
    return response?.impressum
  }
})
</script>

<style></style>
