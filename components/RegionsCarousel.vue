<template>
  <div
    v-if="!error && response"
    class="relative h-svh !px-0 pt-72"
    :class="{'mx-auto': gridSmallerThanWindow}"
  >
    <div v-if="allRegions.length > 2" class="relative h-full">
      <div
        ref="scroller"
        class="no-scrollbar scroller relative grid h-full grid-flow-col grid-rows-1 gap-16 overflow-x-auto bg-white p-16 xl:gap-24 xl:p-24"
      >
        <RegionCard
          v-for="region in allRegions"
          :key="region.id"
          :region="region"
        />
      </div>
      <button
        v-if="!gridSmallerThanWindow"
        class="hocus:bg-blue-dark/30 absolute left-32 top-1/2 z-10 hidden size-48 -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
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
        class="hocus:bg-blue-dark/30 absolute right-32 top-1/2 z-10 hidden size-48 -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
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
    <div v-else class="flex size-full">
      <div class="grid grow grid-flow-col grid-rows-1 gap-16  p-16 xl:gap-24 xl:p-24">
        <RegionCard
          v-for="region in allRegions"
          :key="region.id"
          :region="region"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import type { Region } from '@/types/dato-models/Region'

interface AllRegionsResponse {
  allRegions: Region[]
}

const { data: { value: response }, error } = await useGraphqlQuery(`query  {
  allRegions(orderBy: _createdAt_ASC) {
    url
    state
    name
    brandName
    brandIntellectualPropertySymbols
    subRegion
    id
    mainImage {
      responsiveImage(imgixParams: { fit: max, h: 1000, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
    _allReferencingCities {
      id
      name
    }
  }
}`) as AsyncData<AllRegionsResponse, RTCError>
const scroller = ref()
const allRegions = computed(() => {
  return response.allRegions.filter(x => x.state !== 'hidden')
})

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
  window.addEventListener('resize', () => {
    checkGridSize()
  })
})

</script>

<style scoped>
.scroller {
  grid-auto-columns: calc((100vh - 72px - 32px)/1.333);
}

@media (min-width: 1152px) {
  .scroller {
  grid-auto-columns: calc((100vh - 72px - 44px)/1.333);
}
}
</style>
