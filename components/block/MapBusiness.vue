<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div class="relative mx-auto max-w-screen-2xl">
      <HeadlineSection
        :label="data.headline.label"
        :headline="data.headline.headline"
        :subline="data.headline.subline"
      />
    </div>
    <div class="relative !mx-0 !max-w-unset !px-0">
      <div class="relative w-full">
        <ul
          ref="scroller"
          role="list"
          class="no-scrollbar relative mt-72 flex w-full snap-x snap-mandatory gap-16 overflow-x-auto scroll-smooth !px-32 pb-40 pt-6 md:!px-[calc((100vw-2*370px-16px)/2)] xl:gap-32 xl:!px-[calc((100vw-3*370px-2*32px)/2)] xl:pt-6 "
          :class="{
            'justify-center': visibleCards > (locations?.length || 0)
          }"
          @scroll.passive="calculateStep"
        >
          <li
            ref="slides"
            data-location
            class="w-[clamp(320px,370px,calc(100vw-40px))] shrink-0 snap-center snap-always"
          >
            <div
              class="relative flex h-full w-[clamp(320px,370px,80vw)] flex-col items-center justify-center gap-24 rounded-6 border-1 border-gray bg-white p-40 text-center shadow hover:bg-white"
            >
              <Location class="h-104" />
              <div
                class="text-blue/60"
              >
                {{ data.joinCardDescription }}
              </div>
              <TheLink
                :text="$t('Add your buisness')"
                url="https://map.nimiq.com/location/add"
                variant="info"
                :is-external="true"
              />
            </div>
          </li>
          <transition-group name="fade" mode="out-in">
            <li
              v-for="location in locations"
              :key="`card-${location.name}`"
              ref="slides"
              class="w-[clamp(320px,370px,calc(100vw-40px))] shrink-0 snap-center snap-always"
              data-location
            >
              <TheCard
                :title="location.name"
                :description="location.address"
                :event-type="location.category.replace(/_/g, ' & ')"
                :stars="location.rating"
                :footer="cityName"
                :link-label="cityName"
                :link="location.gmaps"
                :image-url="location.name.includes('ROSSMANN') ? '/rossman.png' : `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${location.photo}&key=${mapsApiKey}`"
              />
            </li>
          </transition-group>
        </ul>
        <button
          v-if="activeIndex > 0"
          class="hocus:bg-blue-dark/30 absolute left-32 top-1/2 z-10 -mt-32 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
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
          v-if="activeIndex < (locations?.length || 0) - visibleCards"
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
    </div>
    <div v-if="visibleCards < (locations?.length || 0)" class="flex flex-col">
      <div class="relative mx-auto mt-8 flex">
        <button
          v-for="(_, i) in locations"
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
            class="h-full rounded bg-radial-blue-light transition-all duration-300"
            :style="`margin-left: ${16 * activeIndex - 1}px; width: ${visibleCards - 0.25}rem;`"
          />
        </div>
      </div>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '~/store/store'
import Location from '@/static/icons/Location-Shadow.svg'
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
const mapsApiKey = useRuntimeConfig().public.GOOGLE_MAPS_API
const store = useWebsiteStore()

const cityName = computed(() => {
  const name = useRoute().params.city as string
  return name.charAt(0).toUpperCase() + name.slice(1)
})

// await useAsyncData('loadLocationsByCity', () => store.loadLocationsByCity(cityName.value).then(() => true), {
//   lazy: true
// })

// Fetch when component mounts:
onMounted(() => {
  store.loadLocationsByCity(cityName.value)
})

const locations = computed(() => {
  return store.getLocations(cityName.value)
})
// BELOW IS OLD
const amountOfItems = computed(() => {
  if (locations.value) {
    return locations.value?.length + 1
  }
  return 1
})

const activeIndex = ref(0)
const scroller = ref<HTMLUListElement | null>(null)

const scrollerStyles = ref<CSSStyleDeclaration | null>(null)
const scrollerPaddingLeft = computed(() => parseFloat(scrollerStyles.value?.paddingLeft || '0'))
const scrollerPaddingRight = computed(() => parseFloat(scrollerStyles.value?.paddingRight || '0'))
const scrollerGap = computed(() => parseFloat(scrollerStyles.value?.gap || '0'))
const visibleCards = ref(1)

function onWindowResize () {
  visibleCards.value = window.innerWidth < 640 ? 1 : window.innerWidth < 1152 ? 2 : 3

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

function calculateStep (event: UIEvent) {
  const target = event.currentTarget as HTMLDivElement

  const padding = scrollerPaddingLeft.value + scrollerPaddingRight.value
  const gap = scrollerGap.value
  const cards = visibleCards.value
  const cardWidth = (target.offsetWidth - padding) / cards + (gap * 1) / cards

  activeIndex.value = Math.round(target.scrollLeft / cardWidth)
}

function slideTo (index: number) {
  // Clamp new index
  index = Math.min(Math.max(0, index), amountOfItems.value - visibleCards.value)

  const card = scroller.value?.querySelectorAll('[data-location]')[index] as HTMLElement

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
