<template>
  <BlockWrapper
    :block-background-color="data.settings.backgroundColor"
    :padding-top="0"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="relative !mx-0 w-full !px-0"
  >
    <div class="relative !mx-0 grid !w-full !max-w-full grid-flow-row grid-cols-2 gap-16 !px-16 pb-16 pt-72 xl:gap-24 xl:!px-24 xl:pb-24 2xl:grid-cols-3">
      <nuxt-link
        v-for="city in response.allCities"
        :key="city.id"
        :to="`cities/` + city.name.toLowerCase()"
        class="group relative aspect-[6/9] w-full overflow-hidden rounded-8 transition-transform hover:-translate-y-12  xl:aspect-square "
        :class="{ 'last:col-span-2 last:aspect-video last:2xl:col-span-1 last:2xl:aspect-square': response.allCities.length % 2 !== 0}"
      >
        <CityCard
          :image="city.mainImage"
          :name="city.name"
        />
      </nuxt-link>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import citiesByRegion from '@/graphql/CitiesByRegion'
import { useWebsiteStore } from '@/store/store'
const store = useWebsiteStore()
const citiesQuery = citiesByRegion(store?.region?.id, store.getCurrentLocale)
const { data: response } = await useGraphqlQuery(citiesQuery)
defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const scroller = ref()
function slide (direction: string) {
  // Clamp new index
  const offset = scroller.value?.scrollLeft
      scroller.value!.scrollTo({
        top: 0,
        left: direction === 'forward' ? offset + 328 : offset - 328,
        behavior: 'smooth'
      })
}
const gridSmallerThanWindow: Ref<boolean> = ref(false)
const checkGridSize = () => {
  gridSmallerThanWindow.value = scroller.value?.scrollWidth <= window?.innerWidth
}

onMounted(() => {
  checkGridSize()
  window.addEventListener('resize', () => {
    checkGridSize()
  })
})

</script>
