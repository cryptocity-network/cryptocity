<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="0"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="cities-grid relative !mx-0 !-mt-120 w-full !p-0"
  >
    <div
      class="relative grid !w-full min-w-full grid-flow-row gap-16 !px-16 pb-16 pt-72 xl:gap-24 xl:!px-24 xl:pb-24"
      :class="{
        'grid-cols-1 child:mx-auto child:h-[480px] child:sm:h-[540px]': response.allCities.length === 1,
        'grid-cols-1 child:aspect-[4/5] sm:grid-cols-2 child:sm:aspect-[6/9] child:lg:aspect-square child:2xl:aspect-[6/4]': response.allCities.length === 2,
        'grid-cols-1 child:aspect-[4/5] sm:grid-cols-2 child:sm:aspect-[6/9] child:lg:aspect-square xl:grid-cols-3': response.allCities.length > 2
      }"
    >
      <CityCard
        v-for="city in allCities"
        :key="city.id"
        :city="city"
      />
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import citiesByRegion from '@/graphql/CitiesByRegion'
import type { City } from '@/types/dato-models/City'
defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})

interface AllCitiesResponse {
  allCities: City[]
}

const { locale } = useI18n()
const citiesQuery = citiesByRegion(useRuntimeConfig().public.DATO_REGION_ID, locale.value)
const { data: { value: response } } = await useGraphqlQuery(citiesQuery) as AsyncData<AllCitiesResponse, RTCError>

const allCities = computed(() => {
  if (response) {
  // @ts-ignore
    return response.allCities.sort(a => a.state === 'Live' ? -1 : 1)
  } else {
    return null
  }
})
</script>
