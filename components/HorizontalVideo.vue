<template>
  <div
    class="child:aspect-video child:shadow child:rounded-6 mobile-wide"
    :class="{ 'bg-video': !hasPoster }"
  >
    <div
      v-if="!showingYoutubeIframe"
      class="flex overflow-hidden relative items-end shadow child:rounded-6"
    >
      <h2
        v-if="showHeadline && headline"
        class="p-24 max-w-xs font-semibold sm:max-w-none md:p-48 xl:p-72 z-1 !text-blue-dark text-18"
      >
        {{ headline }}
      </h2>

      <template v-if="!thumbnail">
        <div
          class="absolute w-full h-full opacity-10"
          style="
            background-image: radial-gradient(
              80.07% 80.07% at 91.83% 100%,
              rgba(31, 35, 72, 0.4) 0%,
              rgba(31, 35, 72, 0.1) 100%
            );
          "
        />
        <NimiqHexagon
          filled
          class="absolute right-24 bottom-24 w-20 md:right-48 md:bottom-48 lg:right-72 lg:bottom-72 xl:w-40 text-blue-dark/20 md:w-30"
        />
        <NimiqHexagon
          filled
          class="absolute right-0 w-[175px] translate-x-[40%] translate-y-[64%] md:w-[300px] xl:w-[450px] text-blue-dark/[0.03]"
        />
      </template>
      <template v-else>
        <div class="absolute w-full h-full z-1 bg-blue-dark/[.15]" />
        <img :src="thumbnail?.url" class="object-contain absolute w-full h-full" />
      </template>

      <button
        class="grid absolute top-0 left-0 place-items-center w-full h-full drop-shadow-md z-1"
        @click="showYoutubeIframe"
      >
        <!-- FIXME Now we use scale to make it responsive... -->
        <PlayButton
          filled
          class="!lg:mb-0 scale-[0.45] md:scale-75 lg:scale-100 sm:scale-60"
        />
      </button>
    </div>
    <div v-else>
      <div
        id="video-container"
        class="aspect-video child:w-full child:h-full rounded-6"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
import NimiqHexagon from "~/static/icons/nimiq-hexagon-filled.svg?skipsvgo"
import PlayButton from "~/static/icons/play-button.svg?skipsvgo"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const props = defineProps({
  youtubeUrl: {
    required: true,
    type: String,
    default: "https://www.youtube.com/watch?v=9UHW0L0NZs0",
  },
  headline: {
    default: null,
    type: String,
  },
  thumbnail: {
    default: null,
    type: Object,
  },
});
// if (!props.youtubeUrl?.startsWith('https://www.youtube.com/watch?v=')) {
// throw new Error('Invalid youtubeUrl. Make sure you use: https://www.youtube.com/watch?v={VIDEO_ID}')
// }
const videoId = props.youtubeUrl?.split("?v=")[1] || "";
const showingYoutubeIframe = ref(false);
const hasPoster = computed(() => props.thumbnail !== undefined);
const showHeadline = computed(() => props.headline);

onMounted(() => {
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag!.parentNode!.insertBefore(tag, firstScriptTag);
  }
});

async function showYoutubeIframe() {
  showingYoutubeIframe.value = true;
  if (!process.client) return;

  await sleep(100);
  initYoutube();
}

// FIXME: This way of loading the videos have some drawbacks:
// For example in Brave: https://github.com/mediaelement/mediaelement/issues/2722#issuecomment-596573115
// Chrome and Firefox seems to work fine.
function initYoutube() {
  // eslint-disable-next-line no-new
  new window.YT.Player("video-container", {
    videoId,
    width: "100%",
    height: "100%",
    events: {
      // See more events https://developers.google.com/youtube/iframe_api_reference#Events
      onReady: (evt: any) => {
        onPlayerReady(evt);
      },
    },
  });
}

const onPlayerReady = (evt: any) => {
  arget.setVolume(100);
  evt.target.playVideo();
};
</script>

<style scoped>
/* We use > * to avoid FOUC */
.bg-video > * {
  @apply bg-white;
}
</style>
