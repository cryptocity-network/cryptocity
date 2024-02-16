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
