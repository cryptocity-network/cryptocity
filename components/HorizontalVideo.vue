<template>
  <div
    class="mobile-wide bg-white child:aspect-video child:rounded-6 child:shadow"
    :class="{ 'bg-video': !hasPoster }"
  >
    <div
      v-if="!showingYoutubeIframe"
      class="relative flex items-end overflow-hidden shadow child:rounded-6"
    >
      <h2
        v-if="showHeadline && headline"
        class="z-1 max-w-xs p-24 text-18 font-semibold !text-blue-dark sm:max-w-none md:p-48 xl:p-72"
      >
        {{ headline }}
      </h2>

      <template v-if="!thumbnail">
        <div
          class="absolute size-full opacity-10"
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
          class="md:w-30 absolute bottom-24 right-24 w-20 text-blue-dark/20 md:bottom-48 md:right-48 lg:bottom-72 lg:right-72 xl:w-40"
        />
        <NimiqHexagon
          filled
          class="absolute right-0 w-[175px] translate-x-[40%] translate-y-[64%] text-blue-dark/[0.03] md:w-[300px] xl:w-[450px]"
        />
      </template>
      <template v-else>
        <div class="absolute z-1 size-full bg-blue-dark/[.15]" />
        <DatoImage :image="thumbnail" class="absolute size-full object-contain" />
      </template>

      <button
        class="absolute left-0 top-0 z-1 grid size-full place-items-center drop-shadow-md"
        @click="showYoutubeIframe"
      >
        <!-- FIXME Now we use scale to make it responsive... -->
        <div class="relative size-96 rounded-full bg-white/40 lg:size-144">
          <PlayButton
            filled
            class="absolute left-1/2 top-1/2 size-48 -translate-y-1/2 translate-x-[calc(0.25rem-50%)] lg:size-72"
          />
        </div>
      </button>
    </div>
    <div v-else>
      <div
        :id="'video-container-' + videoId"
        class="aspect-video rounded-6 child:size-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import NimiqHexagon from '~/static/icons/nimiq-hexagon-filled.svg'
import PlayButton from '~/static/icons/play-button.svg'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const props = defineProps({
  youtubeUrl: {
    required: true,
    type: String,
    default: 'https://www.youtube.com/watch?v=9UHW0L0NZs0'
  },
  headline: {
    default: null,
    type: String
  },
  thumbnail: {
    default: null,
    type: Object
  }
})

const videoId = props.youtubeUrl?.split('?v=')[1] || ''
const showingYoutubeIframe = ref(false)
const hasPoster = computed(() => props.thumbnail !== undefined)
const showHeadline = computed(() => props.headline)

onMounted(() => {
  // @ts-ignore
  if (!window.YT) {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag!.parentNode!.insertBefore(tag, firstScriptTag)
  }
})

async function showYoutubeIframe () {
  showingYoutubeIframe.value = true
  if (!process.client) { return }

  await sleep(100)
  initYoutube()
}

function initYoutube () {
  // @ts-ignore
  player = new YT.Player('video-container-' + videoId, {
    height: '100%',
    width: '100%',
    videoId,
    playerVars: {
      playsinline: 1
    },
    events: {
      onReady: onPlayerReady
    }
  })
}

const onPlayerReady = (evt: any) => {
  evt.target.setVolume(100)
  evt.target.playVideo()
}
</script>

<style scoped>
/* We use > * to avoid FOUC */
.bg-video > * {
  @apply bg-white;
}
</style>
