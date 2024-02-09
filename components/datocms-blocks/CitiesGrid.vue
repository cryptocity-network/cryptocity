<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="0"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="relative !mx-0 w-full !px-0 !pt-0"
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
import citiesByRegion from '@/graphql/CitiesByRegion'
import { useWebsiteStore } from '@/store/store'
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

const store = useWebsiteStore()
const citiesQuery = citiesByRegion(store?.region?.id, store.getCurrentLocale)
const { data: response } = await useGraphqlQuery(citiesQuery)

const allCities = computed(() => {
  if (response.value) {
  // @ts-ignore
    return response.value.allCities.sort((a, b) => a.state === 'Live' ? -1 : 1)
  } else {
    return null
  }
})
</script>
