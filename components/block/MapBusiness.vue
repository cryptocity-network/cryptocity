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
      <div class="no-scrollbar relative w-full" v-bind="containerProps" @scroll.passive="calculateStep">
        <ul
          v-bind="locationsToShow.length > 0 ? wrapperProps : {}"
          ref="scroller"
          role="list"
          class="no-scrollbar relative mt-72 flex w-full snap-x snap-mandatory gap-16 overflow-x-auto scroll-smooth !px-32 pb-40 pt-6 md:!px-[calc((100vw-2*370px-16px)/2)] xl:gap-32 xl:!px-[calc((100vw-3*370px-2*32px)/2)] xl:pt-6 "
          :class="{
            'justify-center': visibleCards > (locations?.length || 0)
          }"
        >
          <li
            ref="slides"
            data-location
            class="w-[clamp(320px,370px,calc(100vw-40px))] shrink-0 snap-center snap-always"
          >
            <div
              class="relative flex h-full w-[clamp(320px,370px,80vw)] flex-col items-start justify-start rounded-6 border-1 border-gray bg-white p-6 text-center shadow hover:bg-white"
            >
              <!-- <Location class="h-104" /> -->
              <div
                class="grid  place-content-center rounded-4 [&>*]:self-center [&>*]:justify-self-center [&>*]:[grid-area:1/-1]"
              >
                <img
                  class="h-full rounded-4 object-cover"
                  width="356"
                  height="305"
                  src="/static/map-business-background.png"
                  alt=""
                >
                <img width="259" height="180" :src="stickerUrl" alt="">
              </div>
              <div class="flex grow flex-col items-center  justify-center gap-16 p-24 py-32">
                <div class="text-blue/60">
                  {{ data.joinCardDescription }}
                </div>
                <TheLink
                  :text="data.joinLinkLabel"
                  url="https://map.nimiq.com/?modal=crypto-map&nested=candidate"
                  variant="info"
                  is-external
                />
              </div>
            </div>
          </li>
          <li
            v-for="{ data: location, index: i } in locationsToShow"
            :key="`${location.name}-${i}`"
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
              :image-url="location.photo"
            />
          </li>
          <div
            v-show="(!locations || locations.length === 0 || loadingLocations || true) && !hasCityFetchedAllLocations[cityName]"
            class="relative flex w-320 flex-col justify-center"
          >
            <LoadingState class="!h-fit !w-144" />
          </div>
        </ul>
      </div>
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
    <div
      v-if="locations?.length > 0"
      class="mx-auto flex flex-col justify-center overflow-hidden !p-0"
      :style="`max-width: ${(indicatorsOnSide * 2 * 16) + ((visibleCards * 16) + 8)}px;`"
    >
      <div
        class="relative mt-8 flex gap-8 transition-[left] duration-300"
        :style="`left: -${cardsHiddenOnLeft * 16}px;`"
      >
        <button
          v-for="(_location, i) in locations"
          :key="i"
          class="size-8 shrink-0 cursor-pointer rounded bg-blue-dark/10"
          @click="() => slideTo(i - Math.max(0, indicatorsOnSide))"
        />
        <div class="pointer-events-none absolute h-8 w-full rounded">
          <div
            class="h-full rounded bg-radial-blue-light transition-all duration-300"
            :style="`--w: ${(visibleCards * 16) + 8}px; margin-left: min(${16 * (cardsHiddenOnLeft + Math.min(indicatorsOnSide, activeIndex))}px, calc(${locations.length * 16}px - var(--w))); width: var(--w);`"
          />
        </div>
      </div>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '~/store/store'

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

const { locale: lang } = useI18n()
const stickerUrl = computed(() => {
  const { buildAssetsDir } = useRuntimeConfig().app
  const stickers = ['de', 'es', 'fr', 'et']
  return `${buildAssetsDir}static/icons/payment-sticker-${stickers.includes(lang.value) ? lang.value : 'en'}.svg`
})

const cityName = computed(() => {
  const name = useRoute().params.city as string
  return name.charAt(0).toUpperCase() + name.slice(1)
})

const page = ref(1)
const { loadLocationsByCity, loadingLocations, hasCityFetchedAllLocations } = useWebsiteStore()
const { locations: allLocations } = storeToRefs(useWebsiteStore())
const locations = computed(() => allLocations.value?.[cityName.value] || [])
watch(page, () => loadLocationsByCity({ cityName: cityName.value, page: page.value }), { immediate: true })

const activeIndex = ref(0)
const scroller = ref<HTMLUListElement>()
const scrollerParent = computed(() => scroller.value?.parentElement)

const { width: windowWidth } = useWindowSize()
const cardWidth = computed(() => 370 + (windowWidth.value < 1152 ? 16 : 32))
const { arrivedState, x: scrolledDistance } = useScroll(scrollerParent, { offset: { right: 3 * cardWidth.value } })
const cardsHiddenOnLeft = computed(() => Math.floor(scrolledDistance.value / cardWidth.value))

const indicatorsOnSide = 4
const firstRequest = Date.now()
watch(arrivedState, (arrived) => {
  if (arrived.right && Date.now() - firstRequest > 4_000) {
    page.value++
  }
})

const scrollerStyles = ref<CSSStyleDeclaration>()
const scrollerPaddingLeft = computed(() => parseFloat(scrollerStyles.value?.paddingLeft || '0'))
const visibleCards = computed(() => Math.ceil((windowWidth.value - scrollerPaddingLeft.value) / cardWidth.value))

const { list: locationsToShow, containerProps, wrapperProps } = useVirtualList(
  locations,
  { itemWidth: () => cardWidth.value }
)

function calculateStep (event: UIEvent) {
  const target = event.currentTarget as HTMLDivElement
  activeIndex.value = Math.round(target.scrollLeft / cardWidth.value)
}

function slideTo (index: number) {
  // Clamp new index
  index = Math.min(Math.max(0, index), (locations.value?.length || 0) - visibleCards.value)
  scrollerParent.value!.scrollTo({
    top: 0,
    left: scrollerPaddingLeft.value + (cardWidth.value * index),
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
