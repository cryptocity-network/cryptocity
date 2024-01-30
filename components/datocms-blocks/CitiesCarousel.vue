<template>
  <BlockWrapper
    :block-background-color="data.settings.backgroundColor"
    :padding-top="0"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
    class="relative !mx-0 w-screen !px-0"
  >
    <div class="relative !mx-0 h-fit !max-w-fit !px-0" :class="{'!mx-auto w-fit': gridSmallerThanWindow}">
      <div
        v-if="response"
        ref="scroller"
        class="no-scrollbar relative !mx-0 grid !w-full !max-w-full snap-x snap-mandatory grid-rows-1 gap-16 overflow-x-auto scroll-smooth !px-16 pb-16 pt-72 xl:gap-24 xl:!px-24 xl:pb-24"
        :style="`grid-template-columns: repeat(${response.allCities.length + 1}, min-content)`"
      >
        <nuxt-link
          v-for="city in response.allCities"
          :key="city.id"
          :to="`cities/` + city.name.toLowerCase()"
          class="group relative aspect-[2/5] h-[520px] min-w-[328px] overflow-hidden rounded-8 transition-transform hover:-translate-y-16 md:aspect-square md:h-[588px] "
        >
          <CityCard
            :image="city.mainImage"
            :name="city.name"
          />
        </nuxt-link>
      </div>
      <button
        v-if="!gridSmallerThanWindow"
        class="hocus:bg-blue-dark/30 absolute left-32 top-1/2 z-10 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 !px-0 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
        @click="slide('back')"
      >
        <svg width="16" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 12c0-.66.27-1.3.77-1.73L12.97.43a1.85 1.85 0 0 1 2.6.23c.63.77.56 1.89-.16 2.56l-9.78 8.6a.25.25 0 0 0-.02.35l.02.02 9.77 8.6a1.85 1.85 0 0 1-2.45 2.77L1.77 13.73A2.3 2.3 0 0 1 1 12Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        v-if="!gridSmallerThanWindow"
        class="hocus:bg-blue-dark/30 absolute right-32 top-1/2 z-10 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 !px-0 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
        @click="slide('forward')"
      >
        <svg width="16" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="-mr-4 rotate-180">
          <path
            d="M1 12c0-.66.27-1.3.77-1.73L12.97.43a1.85 1.85 0 0 1 2.6.23c.63.77.56 1.89-.16 2.56l-9.78 8.6a.25.25 0 0 0-.02.35l.02.02 9.77 8.6a1.85 1.85 0 0 1-2.45 2.77L1.77 13.73A2.3 2.3 0 0 1 1 12Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import citiesByCountry from '@/graphql/CitiesByCountry'
import { useWebsiteStore } from '@/store/store'
const store = useWebsiteStore()
const citiesQuery = citiesByCountry(store?.country?.id, store.getCurrentLocale)
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
  console.log(gridSmallerThanWindow.value)
  gridSmallerThanWindow.value = scroller.value?.scrollWidth <= window?.innerWidth
}

onMounted(() => {
  checkGridSize()
  window.addEventListener('resize', () => {
    checkGridSize()
  })
})

</script>
