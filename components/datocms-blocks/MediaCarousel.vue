<template>
  <div class="relative pt-72 pb-160 -mt-160">
    <ul
      ref="$scroller"
      class="widest slides !mt-80"
      @scroll.passive="calculateStep"
    >
      <li
        v-for="(item, i) in data.carousel"
        :key="`slide-${i}`"
        ref="$slides"
        class="slide w-full ease-[cubic-bezier(.25,0,0,1)] duration-[0.4s]"
        :class="{ active: step === i }"
        @click="() => goToStep(i)"
      >
        <div class="grow">
          <NimiqVideo
            v-if="isVideo(i)"
            :high-res="item.media.url"
            :medium-res="item.media.url"
            :low-res="item.media.url"
            :poster="item.poster"
            class="flex items-center mx-auto max-h-[60vh] aspect-[var(--aspect)] !w-auto child:w-full"
            :style="`--aspect: ${item.ratio || '9 / 19.5'};`"
            :class="{ 'pointer-events-none': step !== i }"
          />
          <img
            v-else
            :src="item.media.url"
            class="h-full w-full object-cover rounded-6 shadow"
          />
        </div>
        <div
          class="flex flex-col max-w-xl mx-auto gap-y-16 child:text-center mt-48 child:z-50"
        >
          <h3
            class="!text-blue-dark/60 font-bold leading-none tracking-[0.095em] pl-16 uppercase whitespace-nowrap text-12"
            style="text-wrap: initial"
          >
            {{ item.headline }}
          </h3>
          <!-- <RichTextComponent :field="item.description" />
          <span class="font-bold leading-none tracking-[0.095em] pl-16 uppercase whitespace-nowrap text-12">{{ item.subline }}</span> -->
        </div>
      </li>
    </ul>

    <div class="relative flex justify-center mx-auto w-max mt-48">
      <button
        v-for="(_, i) in data.carousel"
        :key="i"
        class="last:mr-4 first:ml-0 w-8 after:min-w-[16px] h-8 after:min-h-[16px] rounded transition-transform delay-75 cursor-pointer bg-blue-dark/10"
        :class="{
          'ml-8 mr-8 scale-0': i === step,
          'ml-4 mr-4 scale-100': i !== step,
        }"
        @click="() => goToStep(i)"
      ></button>
      <div class="absolute w-full h-8 rounded pointer-events-none">
        <div
          class="w-16 h-full transition-all duration-300 rounded bg-green"
          :style="`margin-left: ${16 * step - (step === 0 ? 4 : 0)}px`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const step = ref(0);
const $scroller = ref<HTMLDivElement | null>(null);
const $slides = ref<Array<HTMLDivElement>>([]);

const windowWidth = ref(0);

function onWindowResize() {
  windowWidth.value = window.innerWidth;
}

useEventListener("resize", onWindowResize, undefined, {
  immediate: true,
  passive: true,
});

const slideWidth = computed(() => $slides.value[0].clientWidth);
const padding = computed(() => windowWidth.value - slideWidth.value);
const numberOfSlides = computed(() => props.data.carousel.length);

function calculateStep(event: Event) {
  const target = event.target as HTMLDivElement;

  const scrollableWidth = target.scrollWidth - padding.value;
  const gap =
    (scrollableWidth - slideWidth.value * numberOfSlides.value) /
    (numberOfSlides.value - 1);

  step.value = Math.round(target.scrollLeft / (slideWidth.value + gap));
}

function goToSlide(slide: HTMLDivElement) {
  $scroller.value!.scrollTo({
    top: 0,
    left: slide.offsetLeft - padding.value / 2,
    behavior: "smooth",
  });
}

function goToStep(step: number) {
  const slide = $slides.value[step];
  if (!slide) return;
  goToSlide(slide);
}

function isVideo(i: number) {
  return props.data.carousel[i].media?.mimeType.includes("video");
}
</script>

<style scoped>
.slides {
  @apply flex gap-16 -mt-96 md:gap-32 xl:gap-48;
  @apply snap-x snap-mandatory overflow-x-auto no-scrollbar !px-[max(16px,calc((100vw-250px)/2))] md:!px-[calc((100vw-2*150px-16px)/2)] lg:!px-[calc((100vw-2*150px-32px)/2)] xl:!px-[calc((100vw-3*150px-2*32px)/2)] 2xl:!px-[calc((100vw-3*150px-2*32px)/2)];

  .slide {
    @apply shrink-0 w-full max-w-[824px] flex flex-col;
    @apply snap-center snap-always;
    @apply opacity-20 transition-opacity;

    &:not(.active) {
      @apply cursor-pointer hover:opacity-40;
    }

    &.active {
      @apply opacity-100;
    }

    .image,
    .video {
      @apply shadow rounded-4 md:rounded-6;
    }
  }
}
</style>
