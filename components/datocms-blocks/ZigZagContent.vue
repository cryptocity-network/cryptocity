<template>
  <BlockWrapper
    :block-background-color="data.settings.backgroundColor"
    :padding-top="96"
    :no-padding-bottom="false"
    :overlaps-next-section="false"
  >
    <ul class="wide mx-auto md:px-24 2xl:!max-w-[1440px]">
      <li
        v-for="(item, i) in data.blocks"
        :key="i"
        class="flex flex-col items-stretch gap-x-64 px-24"
        :class="{
          'border-b border-blue-dark/10 pb-64 xl:pb-72':
            i === 0 && data.blocks.length > 1,
          'border-b border-blue-dark/10 py-64 xl:py-72':
            i > 0 && i < data.blocks.length - 1,
          'pt-64 xl:pt-72': i === data.blocks.length - 1,
          'xl:flex-row-reverse': i % 2 === 0,
          'xl:flex-row': i % 2 !== 0,
        }"
      >
        <div
          v-if="item.youtubeLink"
          class="child:md:max-xl:w-[calc(100vw-64px*2)] relative flex items-center justify-center child:max-md:w-full xl:w-[calc(50vw-32px*2)] 2xl:w-[calc(1440px/2-32px*2)]"
        >
          <HorizontalVideo
            :youtube-url="item.youtubeLink"
            :thumbnail="item.image"
            class="w-full"
          />
        </div>
        <div
          v-else
          class="max-xl:h-360 child:md:max-xl:w-[calc(100vw-64px*2)]  relative flex justify-center child:mx-auto child:rounded-6 child:max-md:w-full xl:w-[calc(50vw-32px*2)] xl:items-center 2xl:w-[calc(1440px/2-32px*2)]"
        >
          <img
            v-if="item.image"
            class="aspect-[4/3] h-full rounded-8 border border-blue-dark/20 object-cover shadow"
            :src="item.image.url"
          >
        </div>
        <div
          v-if="item.badge"
          class="mx-24 mt-16 flex h-32 w-max items-center gap-8 self-start overflow-hidden rounded bg-[#21BCA5]/20 px-16 py-8 text-[#13B59D] md:self-center xl:hidden xl:h-0"
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
          class="content px-24 pt-64 md:items-center md:py-80 xl:flex-1 xl:px-0 xl:py-96"
        >
          <div
            class="mb-24 flex w-max md:mx-auto md:items-center xl:mx-unset xl:w-full"
            :class="{
              'flex flex-col-reverse flex-wrap justify-between gap-16 sm:flex-row xl:justify-between':
                item.badge,
            }"
          >
            <img
              v-if="item.logo"
              :src="item.logo.url"
              class="flex max-h-40 w-max flex-col-reverse flex-wrap justify-between gap-16 sm:flex-row md:mx-auto md:items-center xl:mx-unset xl:justify-between"
              alt=""
            >
            <div
              v-if="item.badge"
              class="hidden h-32 w-max items-center gap-8 rounded bg-[#21BCA5]/20 px-16 py-8 text-[#13B59D] xl:flex"
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
            class="max-w-screen-2xl font-semibold md:mx-auto md:text-center xl:mx-unset xl:text-left"
          >
            {{ item.headline }}
          </h3>
          <div class="mt-8 text-12 font-bold tracking-wide text-blue-dark/60 md:text-center xl:text-left">
            {{ item.label }}
          </div>
          <StructuredText class="prose mt-32 max-w-screen-2xl text-blue/60 md:mx-auto md:text-center xl:mx-unset xl:text-left" :data="item.description" />
          <div
            class="mt-24 flex flex-wrap items-center justify-start gap-24 md:flex-col md:justify-center xl:flex-row xl:justify-start"
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
