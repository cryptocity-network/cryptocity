<template>
  <BlockWrapper :block-background-color="backgroundColor" :padding-top="96" :no-padding-bottom="false"
    :overlaps-next-section="false">
    <div class="widest relative">
      <ul ref="scroller" role="list"
        class="no-scrollbar -mt-6 flex w-full snap-x snap-mandatory gap-16 overflow-x-auto scroll-smooth !px-32 pb-40 pt-6 md:!px-[calc((100vw-2*370px-16px)/2)] xl:gap-32 xl:!px-[calc((100vw-3*370px-2*32px)/2)] xl:pt-6 "
        :class="{
          'justify-center': visibleCards > response.allEvents.length
        }" @scroll.passive="calculateStep">
        <li v-for="(event) in response.allEvents" :key="`card-${event.id}`" ref="slides"
          class="w-[clamp(320px,370px,calc(100vw-40px))] shrink-0 snap-center snap-always" data-event>
          <TheCard :title="event.title" :description="event.description" :image="event.image"
            :footer="event.isItGlobalNews ? 'Global' : event.locationCity.name" :label="getDate(event.start, event.end)"
            :link-label="event.linkLabel" :link="event.link" />
        </li>
      </ul>

      <button v-if="activeIndex > 0"
        class="hocus:bg-blue-dark/30 absolute left-32 top-1/2 z-10 -mt-24 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
        @click="goToPrevious">
        <svg width="16" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 12c0-.66.27-1.3.77-1.73L12.97.43a1.85 1.85 0 0 1 2.6.23c.63.77.56 1.89-.16 2.56l-9.78 8.6a.25.25 0 0 0-.02.35l.02.02 9.77 8.6a1.85 1.85 0 0 1-2.45 2.77L1.77 13.73A2.3 2.3 0 0 1 1 12Z"
            fill="currentColor" />
        </svg>
      </button>

      <button v-if="activeIndex < response.allEvents.length - visibleCards"
        class="hocus:bg-blue-dark/30 absolute right-32 top-1/2 z-10 -mt-24 hidden size-48 cursor-pointer items-center justify-center rounded bg-blue-dark/20 text-white transition-[background-color] active:bg-blue-dark/40 sm:flex"
        @click="goToNext">
        <svg width="16" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="-mr-4 rotate-180">
          <path
            d="M1 12c0-.66.27-1.3.77-1.73L12.97.43a1.85 1.85 0 0 1 2.6.23c.63.77.56 1.89-.16 2.56l-9.78 8.6a.25.25 0 0 0-.02.35l.02.02 9.77 8.6a1.85 1.85 0 0 1-2.45 2.77L1.77 13.73A2.3 2.3 0 0 1 1 12Z"
            fill="currentColor" />
        </svg>
      </button>
    </div>
    <div v-if="visibleCards < response.allEvents.length" class="flex flex-col">
      <div class="relative mx-auto mt-48 flex">
        <button v-for="(_, i) in response.allEvents" :key="i"
          class="mx-4 size-8 cursor-pointer rounded bg-blue-dark/10 transition-transform delay-75 after:min-h-[16px] after:min-w-[16px] first:ml-0 last:mr-4"
          :class="{
            'scale-0': i >= activeIndex && i < activeIndex + visibleCards,
            'scale-100': i < activeIndex || i >= activeIndex + visibleCards,
          }" @click="() => slideTo(i)" />
        <div class="pointer-events-none absolute h-8 w-full rounded">
          <div class="h-full rounded bg-green transition-all duration-300"
            :style="`margin-left: ${16 * activeIndex - 2}px; width: ${visibleCards - 0.25}rem;`" />
        </div>
      </div>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import type { AsyncData } from 'nuxt/app'
import eventsByCityQuery from '../../graphql/EventsByCity'
import eventsByRegionQuery from '../../graphql/EventsByRegion'
import { useWebsiteStore } from '~/store/store'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  cityId: {
    type: String,
    required: false,
    default: null
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})
interface Event {
  id: string,
  title: string,
  description: string,
  image: {
    url: string
  },
  isItGlobalNews: boolean,
  start: string,
  end: string,
  linkLabel: string,
  link: string,
  locationCity: {
    name: string
  }
}
interface EventsResponse {
  allEvents: Event[]
}

const { locale } = useI18n()
const { region } = storeToRefs(useWebsiteStore())
let populatedEventsQuery
if (useRoute().path.includes('cities')) {
  populatedEventsQuery = eventsByCityQuery(props.cityId, locale.value)
} else {
  populatedEventsQuery = eventsByRegionQuery(region.value!.id, locale.value)
}

// let response: Array<AllEvents> | null= null
const { data: { value: response } } = await useGraphqlQuery(populatedEventsQuery) as AsyncData<EventsResponse, RTCError>

function getDate(start: string, end: string) {
  const [startCalendar] = start.split('T')
  const [startYear, startMonth, startDay] = startCalendar.split('-')
  const startDate = new Date(~~startYear, ~~startMonth - 1, ~~startDay)
  const startMonthName = startDate.toLocaleString('default', { month: 'short' })
  const processedStart = `${startDay} ${startMonthName.toLocaleUpperCase()}`

  if (!end) return processedStart

  const [endCalendar] = end.split('T')
  const [endYear, endMonth, endDay] = endCalendar.split('-')
  const endDate = new Date(~~endYear, ~~endMonth - 1, ~~endDay)

  // If the event is on the same day, return only the start date
  const day = 24 * 60 * 60 * 1000
  if (Math.abs(startDate.getTime() - endDate.getTime()) < 24 * 60 * 60 * 1000) return processedStart

  const endMonthName = endDate.toLocaleString('default', { month: 'short' })
  const processedEnd = `${endDay} ${endMonthName.toLocaleUpperCase()}`
  return `${processedStart} - ${processedEnd}`
}

// BELOW IS OLD
const amountOfItems = computed(() => {
  return response.allEvents.length + 0
})

const activeIndex = ref(0)
const scroller = ref<HTMLUListElement | null>(null)

const scrollerStyles = ref<CSSStyleDeclaration | null>(null)
const scrollerPaddingLeft = computed(() => parseFloat(scrollerStyles.value?.paddingLeft || '0'))
const scrollerPaddingRight = computed(() => parseFloat(scrollerStyles.value?.paddingRight || '0'))
const scrollerGap = computed(() => parseFloat(scrollerStyles.value?.gap || '0'))
const visibleCards = ref(1)

function onWindowResize() {
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

function calculateStep(event: UIEvent) {
  const target = event.currentTarget as HTMLDivElement

  const padding = scrollerPaddingLeft.value + scrollerPaddingRight.value
  const gap = scrollerGap.value
  const cards = visibleCards.value
  const cardWidth = (target.offsetWidth - padding) / cards + (gap * 1) / cards

  activeIndex.value = Math.round(target.scrollLeft / cardWidth)
}

function slideTo(index: number) {
  // Clamp new index
  index = Math.min(Math.max(0, index), amountOfItems.value - visibleCards.value)

  const card = scroller.value?.querySelectorAll('[data-event]')[index] as HTMLElement

  scroller.value!.scrollTo({
    top: 0,
    left: card.offsetLeft - scrollerPaddingLeft.value,
    behavior: 'smooth'
  })
}

function goToPrevious() {
  slideTo(activeIndex.value - visibleCards.value)
}

function goToNext() {
  slideTo(activeIndex.value + visibleCards.value)
}
</script>
