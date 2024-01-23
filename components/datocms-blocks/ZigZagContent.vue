<template>
  <section
    class="pb-160 pt-96"
  >
    <ul class="mx-auto px-24 2xl:!max-w-[1440px]">
      <li
        v-for="(item, i) in data.blocks"
        :key="i"
        class="flex flex-col items-stretch gap-x-64"
        :class="{
          'border-b border-blue-dark/10 pb-64 lg:pb-72':
            i === 0 && data.blocks.length > 1,
          'border-b border-blue-dark/10 py-64 lg:py-72':
            i > 0 && i < data.blocks.length - 1,
          'pt-64 lg:pt-72': i === data.blocks.length - 1,
          'lg:flex-row-reverse': i % 2 === 0,
          'lg:flex-row': i % 2 !== 0,
        }"
      >
        <PrismicVideo
          v-if="data.variation === 'default' && item.videoHigh"
          class="aspect-video lg:flex-1"
          :high-res="item.videoHigh.url"
          :medium-res="item.videoHigh.url"
          :low-res="item.videoHigh.url"
          :poster="item.videoPoster"
        />

        <div
          v-else-if="item.embedded"
          class="relative flex h-[550px] w-full justify-center child:mx-auto child:rounded-6 child:max-md:w-full max-lg:h-360 md:px-32 child:md:max-lg:w-[calc(100vw-64px*2)] lg:w-[calc(50vw-32px*2)] 2xl:w-[calc(1440px/2-32px*2)]"
        >
          <iframe
            :src="item.embedded"
            class="size-full rounded-8 border border-blue-dark/20 shadow"
          />
        </div>

        <div
          v-else-if="item.youtubeVideo && item.youtubeVideo.url"
          class="relative flex h-max w-full items-center justify-center child:mx-auto child:rounded-6 child:max-md:w-full md:px-32 child:md:max-lg:w-[calc(100vw-64px*2)] lg:w-[calc(50vw-32px*2)] 2xl:w-[calc(1440px/2-32px*2)]"
        >
          <HorizontalVideo
            :youtube-url="item.youtubeVideo.url"
            :poster="item.image"
            class="w-full"
          />
        </div>

        <div
          v-else-if="Object.keys(item.image).length > 0"
          class="relative flex justify-center child:mx-auto child:rounded-6 child:max-md:w-full max-lg:h-360 md:px-32 child:md:max-lg:w-[calc(100vw-64px*2)] lg:w-[calc(50vw-32px*2)] 2xl:w-[calc(1440px/2-32px*2)]"
        >
          <!-- <image
            v-if="Object.keys(item.stamp).length > 0"
            :field="item.stamp"
            class="pointer-events-none absolute bottom-24 left-24 z-10 !w-160 md:left-[88px] lg:bottom-56 lg:!w-280"
          />
          <div
            v-if="Object.keys(item.stamp).length > 0"
            class="pointer-events-none absolute inset-0 opacity-40 lg:inset-x-32"
            style="
              background: linear-gradient(
                0deg,
                #1f2348 0%,
                rgba(31, 35, 72, 0) 100%
              );
            "
          />
          <div
            v-if="Object.keys(item.stamp).length > 0"
            class="pointer-events-none absolute inset-0 bg-blue-dark/20 lg:inset-x-32"
          /> -->
          <img
            class="size-full rounded-8 border border-blue-dark/20 object-cover shadow lg:max-h-[80vh] lg:w-[calc(50vw-32px*2)]"
            :src="item.image.url"
          >
        </div>
        <div
          v-if="item.badge"
          class="mx-24 mt-16 flex h-32 w-max items-center gap-8 self-start overflow-hidden rounded bg-[#21BCA5]/20 px-16 py-8 text-[#13B59D] md:self-center lg:hidden lg:h-0"
        >
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="height: 18px"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.03.342a1.641 1.641 0 0 0-2.519.674l-.559 1.357a1.641 1.641 0 0 1-1.306 1.002l-1.455.189A1.641 1.641 0 0 0 .888 5.822l.564 1.354a1.641 1.641 0 0 1-.215 1.632L.342 9.97a1.641 1.641 0 0 0 .674 2.519l1.357.559c.544.224.926.722 1.002 1.306l.189 1.455a1.641 1.641 0 0 0 2.258 1.303l1.354-.563a1.641 1.641 0 0 1 1.632.214l1.162.895c.857.66 2.107.326 2.519-.674l.559-1.357a1.641 1.641 0 0 1 1.306-1.002l1.455-.189a1.641 1.641 0 0 0 1.303-2.258l-.563-1.354a1.641 1.641 0 0 1 .214-1.632l.895-1.162a1.641 1.641 0 0 0-.674-2.519l-1.357-.559a1.641 1.641 0 0 1-1.002-1.306l-.189-1.455A1.641 1.641 0 0 0 12.178.888l-1.354.564a1.641 1.641 0 0 1-1.632-.215L8.03.342Zm4.875 7.478a1.06 1.06 0 0 0-1.474-1.523L7.944 9.67 6.57 8.34a1.06 1.06 0 1 0-1.473 1.522l2.111 2.044a1.06 1.06 0 0 0 1.474 0l4.224-4.087Z"
              fill="currentColor"
            />
          </svg>
          <span class="whitespace-nowrap text-16 font-bold">
            {{ item.badge }}</span>
        </div>

        <div
          class="content px-24 pt-64 md:items-center md:py-80 lg:flex-1 lg:px-0 lg:py-96"
        >
          <div
            class="mb-24 flex w-max md:mx-auto md:items-center lg:mx-unset lg:w-full"
            :class="{
              'flex flex-col-reverse flex-wrap justify-between gap-16 sm:flex-row lg:justify-between':
                item.badge,
            }"
          >
            <img
              v-if="item.logo"
              :src="item.logo.url"
              class="flex max-h-40 w-max flex-col-reverse flex-wrap justify-between gap-16 sm:flex-row md:mx-auto md:items-center lg:mx-unset lg:justify-between"
              alt=""
            >
            <div
              class="hidden h-32 w-max items-center gap-8 rounded bg-[#21BCA5]/20 px-16 py-8 text-[#13B59D] lg:flex"
            >
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="height: 18px"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.03.342a1.641 1.641 0 0 0-2.519.674l-.559 1.357a1.641 1.641 0 0 1-1.306 1.002l-1.455.189A1.641 1.641 0 0 0 .888 5.822l.564 1.354a1.641 1.641 0 0 1-.215 1.632L.342 9.97a1.641 1.641 0 0 0 .674 2.519l1.357.559c.544.224.926.722 1.002 1.306l.189 1.455a1.641 1.641 0 0 0 2.258 1.303l1.354-.563a1.641 1.641 0 0 1 1.632.214l1.162.895c.857.66 2.107.326 2.519-.674l.559-1.357a1.641 1.641 0 0 1 1.306-1.002l1.455-.189a1.641 1.641 0 0 0 1.303-2.258l-.563-1.354a1.641 1.641 0 0 1 .214-1.632l.895-1.162a1.641 1.641 0 0 0-.674-2.519l-1.357-.559a1.641 1.641 0 0 1-1.002-1.306l-.189-1.455A1.641 1.641 0 0 0 12.178.888l-1.354.564a1.641 1.641 0 0 1-1.632-.215L8.03.342Zm4.875 7.478a1.06 1.06 0 0 0-1.474-1.523L7.944 9.67 6.57 8.34a1.06 1.06 0 1 0-1.473 1.522l2.111 2.044a1.06 1.06 0 0 0 1.474 0l4.224-4.087Z"
                  fill="currentColor"
                />
              </svg>
              <span class="whitespace-nowrap text-16 font-bold">
                {{ item.badge }}</span>
            </div>
          </div>

          <h4
            class="max-w-screen-2xl md:mx-auto md:text-center lg:mx-unset lg:text-left"
          >
            {{ item.headline }}
          </h4>
          <div class="nq_small-label mt-12 md:text-center lg:text-left">
            {{ item.label }}
          </div>
          <p
            class="mt-32 max-w-screen-2xl text-blue/60 md:mx-auto md:text-center lg:mx-unset lg:text-left"
          >
            {{ item.description }}
          </p>
          <div
            class="mt-24 flex flex-wrap items-center justify-start gap-24 sm:justify-center md:flex-col lg:flex-row lg:justify-start"
          >
            <TheLink
              v-if="item.buttonLink && item.buttonLabel"
              :link="item.buttonLink"
              :text="item.buttonLabel"
              variant="info"
            />
            <TheLink
              v-if="item.secondaryButtonLink && item.secondaryButtonLabel"
              :link="item.secondaryButtonLink"
              :text="item.secondaryButtonLabel"
              variant="info"
              secondary
            />
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
// import { useBreakpoints } from "~/composables/useBreakpoints";
import HorizontalVideo from '~/components/HorizontalVideo.vue'

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
// const { smallScreen } = useBreakpoints();
const secondaryButtonLabel = computed(() =>
  true ? 'secondaryButtonLabelMobile' : 'secondaryButtonLabel'
)
</script>

<style scoped>
@media (min-width: 1024px) {
  @media (max-width: 1440px) {
    ul > li:nth-child(even) .content {
      @apply pr-64;
    }

    ul > li:nth-child(odd) .content {
      @apply pl-64;
    }
  }
}
</style>
