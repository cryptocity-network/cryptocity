<template>
  <BlockWrapper
    :block-background-color="backgroundColor"
    :padding-top="160"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <ul class="wide mx-auto md:px-24 2xl:!max-w-[1440px]">
      <li
        v-for="(item, i) in data.blocks"
        :key="i"
        class="flex flex-col items-stretch gap-x-64 px-16 sm:px-24 lg:items-center"
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
        <div v-if="item.image.video !== null" class="max-xl:h-360 child:md:max-xl:w-[calc(100vw-64px*2)]  relative flex justify-center child:mx-auto child:rounded-6 child:max-md:w-full xl:w-[calc(50vw-32px*2)] xl:items-center 2xl:w-[calc(1440px/2-32px*2)]">
          <video
            controls
            :src="item.image.video.mp4Url"
            class="aspect-video h-full rounded-8 border border-blue-dark/20 object-cover shadow"
          />
        </div>
        <div
          v-else-if="item.youtubeLink"
          class="child:md:max-xl:w-[calc(100vw-64px*2)] relative flex items-center justify-center child:max-md:w-full lg:w-[calc(50vw-32px*2)] 2xl:w-[calc(1440px/2-32px*2)]"
        >
          <HorizontalVideo
            :youtube-url="item.youtubeLink"
            :thumbnail="item.image"
            class="w-full"
          />
        </div>
        <div
          v-else-if="item.youtubeLink || item.image.video === null"
          class="relative flex h-[432px] justify-center lg:max-w-[50%]  xl:h-[519px] xl:items-center"
        >
          <img
            v-if="item.image"
            class=" aspect-[3/2] h-full rounded-8 border border-blue-dark/20 object-cover shadow lg:aspect-[4/3]"
            :src="item.image.url"
          >
        </div>
        <div
          v-if="item.badge"
          class="mx-16 mt-16 flex h-32 w-max items-center gap-8 self-start overflow-hidden rounded bg-[#21BCA5]/20 px-16 py-8 text-[#13B59D] sm:self-center lg:hidden lg:h-0"
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
          class="content mt-64 flex flex-col justify-center !px-16 lg:mt-0 lg:flex-1 lg:!px-0"
        >
          <div
            class="mb-24 flex w-max sm:mx-auto sm:items-center lg:mx-unset lg:w-full"
            :class="{
              'flex flex-col-reverse flex-wrap justify-between gap-16 sm:flex-row lg:justify-between':
                item.badge,
            }"
          >
            <img
              v-if="item.logo"
              :src="item.logo.url"
              class="flex max-h-40 w-max flex-col-reverse flex-wrap justify-between gap-16 sm:mx-auto sm:flex-row lg:mx-unset lg:items-center lg:justify-between"
              alt=""
            >
            <div
              v-if="item.badge"
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

          <h3
            class="max-w-screen-2xl font-semibold sm:mx-auto sm:text-center lg:mx-unset lg:text-left"
          >
            {{ item.headline }}
          </h3>
          <div class="mt-8 text-12 font-bold tracking-wide text-blue-dark/60 sm:text-center lg:text-left">
            {{ item.label }}
          </div>
          <StructuredText class="prose mt-32 max-w-screen-2xl text-blue/60 sm:mx-auto sm:text-center lg:mx-unset lg:text-left" :data="item.description" />
          <div
            v-if="item.hasButton || item.hasSecondaryButton"
            class="mt-24 flex flex-col flex-wrap items-start justify-start gap-24 xs:flex-row xs:items-center sm:justify-center lg:justify-start"
          >
            <TheLink
              v-if="item.hasButton"
              :url="item.buttonLink"
              :is-external="true"
              :text="item.buttonLabel"
              variant="info"
            />
            <TheLink
              v-if="item.hasSecondaryButton"
              :url="item.secondaryButtonLink"
              :is-external="true"
              :text="item.secondaryButtonLabel"
              variant="info"
              secondary
            />
          </div>
        </div>
      </li>
    </ul>
  </BlockWrapper>
</template>

<script lang="ts" setup>
import { StructuredText } from 'vue-datocms'

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
