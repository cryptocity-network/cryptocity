<template>
  <div
    class="w-full rounded-6 child:h-full child:rounded-6 child:shadow"
    :class="{ 'bg-video': !hasPoster }"
  >
    <div
      v-if="!showingVideo"
      class="relative flex w-full items-end overflow-hidden shadow"
    >
      <template v-if="!hasPoster">
        <div
          class="absolute size-full bg-black/40"
        />
        <!-- <NimiqHexagon
          class="md:w-30 absolute bottom-24 right-24 w-20 text-blue-dark/20 md:bottom-48 md:right-48 lg:bottom-72 lg:right-72 xl:w-40"
        />
        <NimiqHexagon
          class="absolute right-0 w-[175px] translate-x-[40%] translate-y-[64%] text-blue-dark/[0.03] md:w-[300px] xl:w-[450px]"
        /> -->
      </template>

      <template v-else>
        <div class="absolute z-1 size-full bg-blue-dark/[.15]" />
        <img
          :src="poster.url"
          class="absolute size-full object-contain"
        >
      </template>

      <button
        class="group absolute left-0 top-0 z-1 grid size-full place-items-center drop-shadow-md"
        @click="showVideo"
      >
        <div class="relative size-[86px] rounded-full bg-black/40 p-16 transition-transform group-hover:scale-105">
          <PlayButton
            class="!lg:mb-0 absolute-center size-40 pl-4 transition-all group-hover:scale-110 group-hover:drop-shadow-lg"
          />
        </div>
      </button>
    </div>
    <video
      v-else
      autoplay
      controls
      :src="video"
      class="object-cover"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import PlayButton from '~/static/icons/play-button.svg'
// import NimiqHexagon from '~/static/icons/nimiq-hexagon-filled.svg'

const props = defineProps({
  video: {
    required: true,
    type: String
  },
  poster: {
    type: Object,
    default: () => {}
  }
})
const showingVideo = ref(false)
const hasPoster = computed(() => !!props.poster?.url)

function showVideo () {
  showingVideo.value = true
}
</script>

<style scoped>
/* We use > * to avoid FOUC */
.bg-video > * {
  @apply bg-white;
}

.nq_bg-white .bg-video > * {
  @apply bg-gray;
}
</style>
