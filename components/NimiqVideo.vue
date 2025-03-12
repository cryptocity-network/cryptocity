<template>
  <div
    class="w-full rounded-6 child:h-full child:rounded-6 child:shadow"
    :class="{ 'bg-video': !hasPoster }"
  >
    <div
      v-if="!showingVideo"
      class="relative flex w-full items-end overflow-hidden shadow"
    >
      <template v-if="!hasPoster && !thumbnail">
        <div
          class="absolute size-full bg-black/10"
        >
          <svg class="absolute -top-10 left-0 h-136  -translate-y-1/2" viewBox="0 0 383 331" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-current text-black/10" d="M195.606 0.174561C196.129 0.174561 287.131 0.174561 287.131 0.174561C287.131 31.3848 262.376 60.1541 227.16 60.1541C226.637 60.1541 135.809 60.1541 135.809 60.1541C135.635 28.5951 161.088 0.174561 195.606 0.174561Z" />
            <path class="fill-current text-black/10" d="M336.467 86.3079C336.642 86.831 382.143 165.467 382.143 165.467C355.121 181.159 317.639 174.185 300.032 143.323C299.857 142.8 254.356 64.1643 254.356 64.1643C282.249 48.2976 319.383 56.3182 336.467 86.3079Z" />
            <path class="fill-current text-black/10" d="M82.6355 187.262C82.8098 187.785 128.311 266.421 128.311 266.421C101.289 282.113 63.8075 275.139 46.1997 244.277C46.0254 243.754 0.524231 165.118 0.524231 165.118C28.4177 149.6 65.5508 157.621 82.6355 187.262Z" />
            <path class="fill-current text-black/10" d="M118.197 82.1231C118.023 82.6462 72.5218 161.282 72.5218 161.282C45.5 145.59 32.7736 109.672 50.3813 79.159C50.73 78.6359 96.0568 0 96.0568 0C123.602 16.041 135.282 52.3077 118.197 82.1231Z" />
            <path class="fill-current text-black/10" d="M332.805 251.6C332.631 252.123 287.13 330.759 287.13 330.759C260.108 315.067 247.382 279.149 264.989 248.636C265.164 248.113 310.665 169.477 310.665 169.477C338.21 185.344 349.89 221.61 332.805 251.6Z" />
            <path class="fill-current text-black/10" d="M156.21 270.78C156.733 270.78 247.735 270.78 247.735 270.78C247.735 301.99 222.98 330.759 187.764 330.759C187.241 330.759 96.4131 330.759 96.4131 330.759C96.0644 299.026 121.692 270.78 156.21 270.78Z" />
          </svg>

          <svg class="absolute -bottom-20 left-56 h-240" viewBox="0 0 383 331" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-current text-black/10" d="M195.606 0.174561C196.129 0.174561 287.131 0.174561 287.131 0.174561C287.131 31.3848 262.376 60.1541 227.16 60.1541C226.637 60.1541 135.809 60.1541 135.809 60.1541C135.635 28.5951 161.088 0.174561 195.606 0.174561Z" />
            <path class="fill-current text-black/10" d="M336.467 86.3079C336.642 86.831 382.143 165.467 382.143 165.467C355.121 181.159 317.639 174.185 300.032 143.323C299.857 142.8 254.356 64.1643 254.356 64.1643C282.249 48.2976 319.383 56.3182 336.467 86.3079Z" />
            <path class="fill-current text-black/10" d="M82.6355 187.262C82.8098 187.785 128.311 266.421 128.311 266.421C101.289 282.113 63.8075 275.139 46.1997 244.277C46.0254 243.754 0.524231 165.118 0.524231 165.118C28.4177 149.6 65.5508 157.621 82.6355 187.262Z" />
            <path class="fill-current text-black/10" d="M118.197 82.1231C118.023 82.6462 72.5218 161.282 72.5218 161.282C45.5 145.59 32.7736 109.672 50.3813 79.159C50.73 78.6359 96.0568 0 96.0568 0C123.602 16.041 135.282 52.3077 118.197 82.1231Z" />
            <path class="fill-current text-black/10" d="M332.805 251.6C332.631 252.123 287.13 330.759 287.13 330.759C260.108 315.067 247.382 279.149 264.989 248.636C265.164 248.113 310.665 169.477 310.665 169.477C338.21 185.344 349.89 221.61 332.805 251.6Z" />
            <path class="fill-current text-black/10" d="M156.21 270.78C156.733 270.78 247.735 270.78 247.735 270.78C247.735 301.99 222.98 330.759 187.764 330.759C187.241 330.759 96.4131 330.759 96.4131 330.759C96.0644 299.026 121.692 270.78 156.21 270.78Z" />
          </svg>
        </div>
      </template>

      <template v-else-if="thumbnail">
        <div class="absolute z-1 size-full bg-blue-dark/[.15]" />
        <img
          ref="thumbnailImg"
          :src="thumbnail"
          class="absolute size-full object-contain"
        >
      </template>
      <template v-else>
        <div class="absolute z-1 size-full bg-blue-dark/[.15]" />
        <DatoImage
          :image="poster"
          class="absolute size-full object-contain"
        />
      </template>

      <button
        class="group absolute left-0 top-0 z-1 grid size-full place-items-center drop-shadow-md"
        aria-label="View video"
        @click="showVideo"
      >
        <div class="relative size-[86px] rounded-full bg-gray/90 p-16 transition-transform group-hover:scale-105 group-hover:bg-gray">
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
import { ref, computed, onMounted } from 'vue'
import PlayButton from '~/static/icons/play-button.svg'

const props = defineProps({
  video: {
    required: true,
    type: String
  },
  thumbnail: {
    required: true,
    type: String
  },
  poster: {
    type: Object,
    default: () => {}
  },
  aspectRatio: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['aspectRatioCalculated'])

const showingVideo = ref(false)
const hasPoster = computed(() => !!props.poster?.url)
const thumbnailImg = ref(null)
const calculatedAspectRatio = ref(props.aspectRatio)

onMounted(() => {
  if (!props.aspectRatio && props.thumbnail && !calculatedAspectRatio.value) {
    calculateAspectRatio(props.thumbnail)
  }
})

function calculateAspectRatio (imageUrl: string) {
  const img = new Image()
  img.onload = () => {
    const ratio = `${img.width} / ${img.height}`
    calculatedAspectRatio.value = ratio
    emit('aspectRatioCalculated', ratio)
  }
  img.src = imageUrl
}

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
