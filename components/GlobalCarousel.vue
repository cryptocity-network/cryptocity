<template>
  <div
    v-if="!error && data"
    ref="scroller"
    class="no-scrollbar grid h-screen grid-rows-1 gap-16 overflow-x-auto bg-white px-16 pb-16 pt-104 xl:gap-24 xl:px-24 xl:pb-24"
    :style="`grid-template-columns: repeat(${data.global?.countries?.countries.length + 2}, min-content)`"
  >
    <nuxt-link
      v-for="country in data.global?.countries?.countries"
      :key="country.id"
      :to="country.url"
      class="group relative aspect-[4/12] h-full min-w-[328px] overflow-hidden rounded-8 transition-transform hover:-translate-y-16 xl:aspect-[3/4]"
    >
      <CountryCard
        v-if="country.socialLinks"
        :image="country.socialLinks.image"
        :logo="country.socialLinks.logo"
      />
    </nuxt-link>
    <!-- <div
      class="group relative aspect-[4/12] h-full min-w-[328px] overflow-hidden rounded-8 xl:aspect-[3/4]"
    >
      <div class="absolute left-0 top-0 size-full bg-gray" />
      <div
        class="absolute left-1/2 top-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 text-center text-20 font-bold text-blue-darker/50"
      >
        Coming Soon
      </div>
    </div> -->
  </div>
  <div v-if="!gridSmallerThanWindow">
    <button
      class="hocus:bg-blue-dark/30 absolute left-32 top-1/2 z-10 -mt-24 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
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
      class="hocus:bg-blue-dark/30 absolute right-32 top-1/2 z-10 -mt-24 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
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
</template>

<script lang="ts" setup>
import globalPage from '@/graphql/Global.js'
const query = globalPage()
const { data, error } = await useGraphqlQuery({ query })
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
  gridSmallerThanWindow.value = scroller.value?.scrollWidth === window?.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', () => {
    checkGridSize()
  })
})

</script>
