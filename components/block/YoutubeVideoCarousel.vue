<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <div class="slide-container !px-0">
      <ul
        ref="$scroller"
        class="slider full-bleed"
        @scroll.passive="calculateStep"
      >
        <li
          v-for="(item, i) in data.videos"
          :key="`slide-${i}`"
          ref="$slides"
          class="slidewrapper"
          @click="() => goToStep(i)"
        >
          <div class="slide flex flex-col" :class="{ active: step === i }">
            <HorizontalVideo
              :youtube-url="item.url"
              :thumbnail="item.thumbnail"
              class="shrink-1 rounded-8"
            />
            <div class="mx-auto grow pt-40 text-center text-21 font-bold sm:max-w-[70%]">
              {{ item.descriptionText }}
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="data.videos.length > 1" class="relative mx-auto mt-40 flex w-max justify-center !p-0 sm:mt-48">
      <button
        v-for="(_, i) in data.videos"
        :key="i"
        class="size-8 cursor-pointer rounded bg-blue-dark/10 transition-transform delay-75 after:min-h-[16px] after:min-w-[16px] first:ml-0 last:mr-0"
        :class="{
          'mx-8 scale-0': i === step,
          'mx-4 scale-100': i !== step,
        }"
        @click="() => goToStep(i)"
      />
      <div class="pointer-events-none absolute top-0 h-8 w-full rounded">
        <div
          class="h-full w-16 rounded bg-green transition-all duration-300"
          :style="`margin-left: ${16 * step - (step === 0 ? 4 : 0)}px`"
        />
      </div>
    </div>
  </BlockWrapper>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => {}
  },
  backgroundColor: {
    type: String,
    required: true,
    default: 'white'
  }
})

const step = ref(0)
const $scroller = ref<HTMLDivElement | null>(null)
const $slides = ref<Array<HTMLDivElement>>([])

const windowWidth = ref(0)

function onWindowResize () {
  windowWidth.value = window.innerWidth
}

useEventListener('resize', onWindowResize, undefined, {
  immediate: true,
  passive: true
})

const slideWidth = computed(() => $slides.value[0].clientWidth)
const padding = computed(() => windowWidth.value - slideWidth.value)
const numberOfSlides = computed(() => props.data.videos.length)

function calculateStep (event: Event) {
  const target = event.target as HTMLDivElement

  const scrollableWidth = target.scrollWidth - padding.value
  const gap =
    (scrollableWidth - slideWidth.value * numberOfSlides.value) /
    (numberOfSlides.value - 1)

  step.value = Math.round(target.scrollLeft / (slideWidth.value + gap))
}

function goToSlide (slide: HTMLDivElement) {
  $scroller.value!.scrollTo({
    top: 0,
    left: slide.offsetLeft - padding.value / 2,
    behavior: 'smooth'
  })
}

function goToStep (step: number) {
  const slide = $slides.value[step]
  if (!slide) {
    return
  }
  goToSlide(slide)
}
</script>

<style scoped>
.slide-container {
  --column-size: 100%;
  --slider-size: max(360px, 60%);
  --slider-fullbleed-gap: max(5%, 1rem);
  width: var(--column-size);
  max-width: var(--column-size);
  margin: 0 auto;
}

.slider {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  width: var(--slider-size);
  margin: 1em auto;
}

/* Hide Scrollbar itself */
.slider {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.slider::-webkit-scrollbar {
  display: none;
}

.slidewrapper {
  scroll-snap-align: center;

  /* Size me */
  flex: 0 0 var(--slider-size);
  width: var(--slider-size);

  /* This is needed for the paddings (in the full-bleed variant) to work …*/
  box-sizing: content-box;

  /* To allow the child .slide to stretch out inside me */
  display: flex;
}

.slide {
  /* Stretch me out in my .slidewrapper parent */
  position: relative;
  flex: 1;

  &::before {
    @apply bg-transparent absolute top-0 left-0 w-full h-full z-10;
    content: '';
    transition: background-color 0.3s ease;
  }

  &:not(.active)::before {
    @apply bg-white/40 absolute top-0 left-0 w-full h-full z-10;

    content: '';
  }
}

/* @ref https://www.bram.us/2019/04/09/breaking-elements-out-of-their-containers-in-css-with-full-bleed/ */
.full-bleed {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
}

/* Put border-radius on the individual slides, not the slider-container */
.slider.full-bleed {
  border-radius: 0;
}

/* Add a faux gap between the slidewrappers */
.slider.full-bleed .slidewrapper {
  margin-right: var(--slider-fullbleed-gap);
}

/* Offset first slidewrapper from the left so that it apppears centered on load */
.slider.full-bleed .slidewrapper:first-child {
  padding-left: calc(50vw - (var(--slider-size) / 2));
}

/* Offset last slidewrapper so that it apppears centered when at the last item */
/* Note that margin-right won't work …*/
.slider.full-bleed .slidewrapper:last-child {
  margin-right: 0;
  padding-right: calc(50vw - (var(--slider-size) / 2));
}
</style>
