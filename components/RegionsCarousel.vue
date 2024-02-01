<template>
  <div
    v-if="!error && data"
    class="relative h-screen  !px-0 pt-72"
    :class="{'mx-auto': gridSmallerThanWindow}"
    style="width: 100vw"
  >
    <div v-if="data.allRegions.length < 2" class="relative size-full">
      <div
        ref="scroller"
        class="no-scrollbar relative grid h-full grid-rows-1 gap-16 overflow-x-auto bg-white p-16 xl:gap-24 xl:p-24"
        :style="`grid-template-columns: repeat(${data.allRegions.length}, min-content)`"
      >
        <nuxt-link
          v-for="region in data.allRegions"
          :key="region.id"
          :to="region.url"
          class="group relative aspect-[4/12] h-full min-w-[328px] overflow-hidden rounded-8 transition-transform hover:-translate-y-16 xl:aspect-[3/4]"
        >
          <RegionCard
            v-if="region.socialLinks"
            :image="region.socialLinks.image"
            :url="region.url"
          />
        </nuxt-link>
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
    <div v-else class="grid size-full grid-flow-col grid-rows-1 gap-16  p-16 xl:gap-24 xl:p-24">
      <nuxt-link
        v-for="region in data.allRegions"
        :key="region.id"
        :to="region.url"
        class="group relative size-full overflow-hidden rounded-8 transition-transform hover:-translate-y-16 xl:aspect-[3/4]"
      >
        <RegionCard
          v-if="region.socialLinks"
          :image="region.socialLinks.image"
          :url="region.url"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data, error } = await useGraphqlQuery(`query  {
  allRegions(filter: {_status: {eq: published}}, orderBy: _createdAt_ASC) {
    url
    name
    id
    socialLinks {
      image {
        url
      }
    }
  }
}`)
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
  window.addEventListener('resize', () => {
    checkGridSize()
  })
})

</script>
