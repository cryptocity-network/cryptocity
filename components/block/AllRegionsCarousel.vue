<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div class="widest relative">
      <ul
        ref="scroller"
        role="list"
        class="no-scrollbar flex w-full snap-x snap-mandatory gap-16 overflow-x-auto scroll-smooth !px-[max(16px,calc((100vw-370px)/2))] pb-40 pt-12 md:!px-[calc((100vw-2*370px-16px)/2)] xl:gap-32 xl:!px-[calc((100vw-3*370px-2*32px)/2)] xl:pt-16 2xl:!px-[calc((100vw-3*370px-2*32px)/2)]"
        :class="{'justify-center': visibleCards > response.allRegions.length }"
        @scroll.passive="calculateStep"
      >
        <li
          v-for="(region) in response.allRegions"
          :key="`card-${region.id}`"
          ref="slides"
          class="aspect-square w-[clamp(320px,370px,calc(100vw-40px))] shrink-0 snap-center snap-always"
          data-region
        >
          <RegionCard
            class="min-w-full"
            :region="region"
            compact
          />
        </li>
      </ul>

      <button
        v-if="activeIndex > 0"
        class="hocus:bg-blue-dark/30 absolute left-32 top-1/2 z-10 -mt-24 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
        @click="goToPrevious"
      >
        <svg width="16" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 12c0-.66.27-1.3.77-1.73L12.97.43a1.85 1.85 0 0 1 2.6.23c.63.77.56 1.89-.16 2.56l-9.78 8.6a.25.25 0 0 0-.02.35l.02.02 9.77 8.6a1.85 1.85 0 0 1-2.45 2.77L1.77 13.73A2.3 2.3 0 0 1 1 12Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <button
        v-if="activeIndex < response.allRegions.length - visibleCards"
        class="hocus:bg-blue-dark/30 absolute right-32 top-1/2 z-10 -mt-24 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
        @click="goToNext"
      >
        <svg width="16" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="-mr-4 rotate-180">
          <path
            d="M1 12c0-.66.27-1.3.77-1.73L12.97.43a1.85 1.85 0 0 1 2.6.23c.63.77.56 1.89-.16 2.56l-9.78 8.6a.25.25 0 0 0-.02.35l.02.02 9.77 8.6a1.85 1.85 0 0 1-2.45 2.77L1.77 13.73A2.3 2.3 0 0 1 1 12Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>

    <div v-if="visibleCards <= response.allRegions.length && amountOfItems > 1" class="flex flex-col">
      <div class="relative mx-auto mt-48 flex">
        <button
          v-for="(_, i) in response.allRegions"
          :key="i"
          class="mx-4 size-8 cursor-pointer rounded bg-blue-dark/10 transition-transform delay-75 after:min-h-[16px] after:min-w-[16px] first:ml-0 last:mr-4"
          :class="{
            'scale-0': i >= activeIndex && i < activeIndex + visibleCards,
            'scale-100': i < activeIndex || i >= activeIndex + visibleCards,
          }"
          @click="() => slideTo(i)"
        />
        <div class="pointer-events-none absolute h-8 w-full rounded">
          <div
            class="h-full rounded bg-green transition-all duration-300"
            :style="`margin-left: ${16 * activeIndex - 2}px; width: ${visibleCards - 0.25}rem;`"
          />
        </div>
      </div>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import type { Region } from '@/types/dato-models/Region'

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
interface AllRegionsResponse {
  allRegions: Region[]
}

const { data: { value: response } } = await useGraphqlQuery(`query  {
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

const allRegions = computed(() => {
  return response.allRegions.filter(x => x.state !== 'hidden')
})

const amountOfItems = computed(() => {
  return allRegions.value.length + 1
})

const activeIndex = ref(0)
const scroller = ref<HTMLUListElement | null>(null)

const scrollerStyles = ref<CSSStyleDeclaration | null>(null)
const scrollerPaddingLeft = computed(() => parseFloat(scrollerStyles.value?.paddingLeft || '0'))
const scrollerPaddingRight = computed(() => parseFloat(scrollerStyles.value?.paddingRight || '0'))
const scrollerGap = computed(() => parseFloat(scrollerStyles.value?.gap || '0'))
const visibleCards = ref(1)

function onWindowResize () {
  visibleCards.value = window.innerWidth < 768 ? 1 : window.innerWidth < 1152 ? 2 : 3

  if (scroller.value) {
    scrollerStyles.value = window.getComputedStyle(scroller.value)
  }
}

onMounted(() => {
  onWindowResize()
  window.addEventListener('resize', onWindowResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
})

function calculateStep (event: Event) {
  const target = event.target as HTMLDivElement

  const padding = scrollerPaddingLeft.value + scrollerPaddingRight.value
  const gap = scrollerGap.value
  const cards = visibleCards.value
  const cardWidth = (target.offsetWidth - padding) / cards + (gap * 1) / cards

  activeIndex.value = Math.round(target.scrollLeft / cardWidth)
}

function slideTo (index: number) {
  // Clamp new index
  index = Math.min(Math.max(0, index), amountOfItems.value - visibleCards.value)

  const card = scroller.value?.querySelectorAll('[data-region]')[index] as HTMLElement

      scroller.value!.scrollTo({
        top: 0,
        left: card.offsetLeft - scrollerPaddingLeft.value,
        behavior: 'smooth'
      })
}

function goToPrevious () {
  slideTo(activeIndex.value - visibleCards.value)
}

function goToNext () {
  slideTo(activeIndex.value + visibleCards.value)
}
</script>
