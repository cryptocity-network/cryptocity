<template>
  <BlockWrapper
    :block-background-color="data.settings.backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div class="block !px-0 lg:hidden">
      <div v-if="response" class="relative">
        <ul
          ref="scroller"
          class="no-scrollbar flex w-full gap-16 overflow-x-auto scroll-smooth !px-[max(16px,calc((100vw-255px)/2))] pb-40 pt-12 md:!px-[calc((100vw-2*232px-16px)/2)] xl:gap-32 xl:!px-[calc((100vw-3*245px-2*32px)/2)] xl:pt-16 2xl:!px-[calc((100vw-3*295px-2*32px)/2)]"
        >
          <li
            v-for="(city) in response.allCities"
            :key="city.id"
            ref="slides"
            class="relative w-[clamp(320px,370px,calc(100vw-40px))] shrink-0 snap-center snap-always transition-all hover:-translate-y-12 hover:shadow"
            data-city
          >
            <nuxt-link
              class="flex size-full"
              :to="'/cities/' + city.name.toLowerCase()"
            >
              <img
                v-if="city.mainImage"
                class="aspect-video size-full rounded-6 object-cover"
                :src="city.mainImage.url"
                :alt="city.mainImage.alt"
                srcset=""
              >
              <div
                class="absolute inset-0 rounded-6 opacity-40 [background:linear-gradient(0deg,_#1F2348_0%,_rgba(31,_35,_72,_0)_100%)]"
              />
              <div class="absolute inset-0 rounded-6 bg-blue-dark/20" />
              <div
                class="absolute inset-0 z-1 flex size-full flex-col justify-end p-16"
              >
                <TheLink :text="city.name" invert link="/" />
              </div>
            </nuxt-link>
          </li>
        </ul>
        <button
          v-if="activeIndex > 0"
          class="hocus:bg-blue-dark/30 absolute left-32 top-1/2 z-10 flex size-48 -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-blue-dark text-white transition-[background-color] active:bg-blue-dark/40"
          @click="goToPrevious"
        >
          <svg
            class="cursor-pointer"
            width="20"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12c0-.66.27-1.3.77-1.73L12.97.43a1.85 1.85 0 0 1 2.6.23c.63.77.56 1.89-.16 2.56l-9.78 8.6a.25.25 0 0 0-.02.35l.02.02 9.77 8.6a1.85 1.85 0 0 1-2.45 2.77L1.77 13.73A2.3 2.3 0 0 1 1 12Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          v-if="activeIndex < response.allCities.length - 1"
          class="hocus:bg-blue-dark/30 absolute right-32 top-1/2 z-10 flex size-48 -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-blue-dark text-white transition-[background-color] active:bg-blue-dark/40"
          @click="goToNext"
        >
          <svg
            width="16"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="-mr-4 rotate-180 cursor-pointer"
          >
            <path
              d="M1 12c0-.66.27-1.3.77-1.73L12.97.43a1.85 1.85 0 0 1 2.6.23c.63.77.56 1.89-.16 2.56l-9.78 8.6a.25.25 0 0 0-.02.35l.02.02 9.77 8.6a1.85 1.85 0 0 1-2.45 2.77L1.77 13.73A2.3 2.3 0 0 1 1 12Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-col">
        <div class="relative mx-auto mt-48 flex">
          <button
            v-for="(_, i) in response.allCities"
            :key="i"
            class="mx-4 size-8 cursor-pointer rounded bg-blue-dark/10 transition-transform delay-75 after:min-h-[16px] after:min-w-[16px] first:ml-0 last:mr-4"
            @click="() => slideTo(i)"
          />
          <div class="pointer-events-none absolute h-8 w-full rounded">
            <div
              class="h-full rounded bg-green transition-all duration-300"
              :style="`margin-left: ${16 * activeIndex}px; width: ${0.5}rem;`"
            />
          </div>
        </div>
      </div>
    </div>
    <ul role="list" :aria-label="'cities'" class="hidden w-max !max-w-full flex-wrap justify-center gap-16 lg:flex">
      <!-- v-for="(card, index) in cards"
      :key="`card-${index}`"
      :class="['withEmptyItem', 'roadmap'].includes(slice.variation) ? 'flex-1' : ''" -->
      <li
        v-for="(city) in response.allCities"
        :key="city.id"
        ref="slides"
        class="relative aspect-video h-[208px]
        transition-all
        focus-within:-translate-y-12 focus-within:shadow
        hover:shadow md:hover:-translate-y-12 focus-within:lg:-translate-y-16 hover:lg:-translate-y-16"
        data-city
      >
        <nuxt-link
          class="flex size-full"
          :to="'/cities/' + city.name.toLowerCase()"
        >
          <img
            v-if="city.mainImage"
            class="aspect-video size-full rounded-6 object-cover"
            :src="city.mainImage.url"
            :alt="city.mainImage.alt"
            srcset=""
          >
          <div
            class="absolute inset-0 rounded-6 opacity-40 [background:linear-gradient(0deg,_#1F2348_0%,_rgba(31,_35,_72,_0)_100%)]"
          />
          <div class="absolute inset-0 rounded-6 bg-blue-dark/20" />
          <div
            class="absolute inset-0 z-1 flex size-full flex-col justify-end p-16"
          >
            <TheLink :text="city.name" invert link="/" />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import allCities from '../../graphql/AllCities'
import { useWebsiteStore } from '../../store/store'
import useEventListener from '~/composables/useEventListener'

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

const store = useWebsiteStore()
const citiesQuery = allCities(store.getCurrentLocale)
const { data: response } = await useGraphqlQuery({ query: citiesQuery })

const scroller = ref<HTMLDivElement | null>(null)
const slides = ref<HTMLDivElement[]>([])
const activeIndex = ref(0)

onMounted(() => {
  onWindowResize()
})

const scrollerStyles = ref<CSSStyleDeclaration | null>(null)
const scrollerPaddingLeft = computed(() =>
  parseFloat(scrollerStyles.value?.paddingLeft || '0')
)
// const scrollerPaddingRight = computed(() =>
//   parseFloat(scrollerStyles.value?.paddingRight || '0')
// )
// const scrollerGap = computed(() =>
//   parseFloat(scrollerStyles.value?.gap || '0')
// )
const visibleCities = ref(1)

function onWindowResize () {
  visibleCities.value =
    window.innerWidth < 768 ? 1 : window.innerWidth < 1152 ? 2 : 3

  if (scroller.value) {
    scrollerStyles.value = window.getComputedStyle(scroller.value)
  }
}

useEventListener('resize', onWindowResize, undefined, {
  immediate: true,
  passive: true
})

// function calculateStep (event: Event) {
//   const target = event.target as HTMLDivElement

//   const padding = scrollerPaddingLeft.value + scrollerPaddingRight.value
//   const gap = scrollerGap.value
//   const cities = visibleCities.value
//   const cityWidth =
//     (target.offsetWidth - padding) / cities + (gap * 1) / cities

//   activeIndex.value = Math.round(target.scrollLeft / cityWidth)
//   // emit('indexChanged', activeIndex.value)
// }

function slideTo (index: number) {
  // Clamp new index
  // index = Math.min(Math.max(0, index), props.response.allCities.length - visibleCities.value)

  const city = scroller.value?.querySelectorAll('[data-city]')[
    index
  ] as HTMLElement
  activeIndex.value = index
  scroller.value!.scrollTo({
    top: 0,
    left: city.offsetLeft - scrollerPaddingLeft.value,
    behavior: 'smooth'
  })
}

function goToPrevious () {
  slideTo(activeIndex.value - 1)
}

function goToNext () {
  slideTo(activeIndex.value + 1)
}

onMounted(() => {
  onWindowResize()
})
</script>
