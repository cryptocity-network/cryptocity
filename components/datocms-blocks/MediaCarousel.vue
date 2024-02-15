<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <ul
      ref="$scroller"
      class="widest slides no-scrollbar"
      @scroll.passive="calculateStep"
    >
      <li
        v-for="(item, i) in data.carousel"
        :key="`slide-${i}`"
        ref="$slides"
        class="slide group w-full duration-[0.4s] ease-[cubic-bezier(.25,0,0,1)] last:pr-16"
        :class="{ active: step === i }"
        @click="() => goToStep(i)"
      >
        <div class="grow">
          <NimiqVideo
            v-if="isVideo(i)"
            :video="item.media.url"
            :poster="item.poster"
            class="nimiq-video mx-auto flex aspect-[var(--aspect)] h-[60vh] !w-auto items-center child:w-full"
            :style="`--aspect: ${item.ratio || '9 / 19.5'};`"
            :class="{ 'pointer-events-none': step !== i }"
          />
          <img
            v-else
            :src="item.media.url"
            class="size-full rounded-6 object-cover shadow"
          >
        </div>
        <div
          class="mx-auto mt-40 flex max-w-xl flex-col gap-y-16 child:z-50 child:text-center sm:mt-48"
        >
          <h3
            class="leading-none whitespace-nowrap text-12 font-bold uppercase tracking-[0.095em] !text-blue-dark/60"
            style="text-wrap: initial"
          >
            {{ item.headline }}
          </h3>
        </div>
      </li>
    </ul>

    <div class="relative mx-auto mt-40 flex w-max justify-center !p-0 sm:mt-48">
      <button
        v-for="(_, i) in data.carousel"
        :key="i"
        class=" size-8  cursor-pointer rounded bg-blue-dark/10 transition-transform delay-75 after:min-h-[16px] after:min-w-[16px] first:ml-0 last:mr-0"
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
    required: true
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
const numberOfSlides = computed(() => props.data.carousel.length)

function calculateStep (event: Event) {
  const target = event.target as HTMLDivElement

  const scrollableWidth = target.scrollWidth - padding.value
  const gap =
    (scrollableWidth - slideWidth.value * numberOfSlides.value) /
    (numberOfSlides.value - 1)

  step.value = Math.round(target.scrollLeft / (slideWidth.value + gap))
}

function goToSlide (slide: HTMLDivElement) {
  // console.log(slide.offsetLeft)
  $scroller.value!.scrollTo({
    top: 0,
    left: slide.offsetLeft - padding.value / 2,
    behavior: 'smooth'
  })
}

function goToStep (step: number) {
  const slide = $slides.value[step]
  if (!slide) { return }
  goToSlide(slide)
}

function isVideo (i: number) {
  return props.data.carousel[i].media?.mimeType.includes('video')
}

// onMounted(() => {
//   goToStep(0)
// })
</script>

<style scoped>
.slides {
  @apply flex gap-16;
  @apply snap-x snap-mandatory overflow-x-auto !px-[calc((100vw-300px-16px)/2)];

  .slide {
    @apply shrink-0 w-[300px] items-center justify-center flex flex-col;
    @apply snap-center snap-always;
    @apply opacity-20 transition-[opacity,filter];

    &:not(.active) {
      @apply cursor-pointer hover:opacity-40 brightness-[0.85];
      .nimiq-video {
        @apply scale-95 group-hover:scale-150 transition-transform duration-500 ease-[cubic-bezier(.25,0,0,1)];
      }
    }

    &.active {
      @apply opacity-100;

      .nimiq-video {
        @apply scale-100 transition-transform duration-500 ease-[cubic-bezier(.25,0,0,1)];
      }
    }

    .image,
    .video {
      @apply shadow rounded-4 md:rounded-6;
    }
  }
}
</style>
