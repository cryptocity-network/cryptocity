<template>
  <div
    class="w-full child:h-full child:shadow child:rounded-6 rounded-6"
    :class="{ 'bg-video': !hasPoster }"
  >
    <div
      v-if="!showingVideo"
      class="relative flex items-end w-full overflow-hidden shadow"
    >
      <template v-if="!hasPoster">
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
          class="absolute w-20 right-24 bottom-24 md:right-48 md:bottom-48 lg:right-72 lg:bottom-72 xl:w-40 text-blue-dark/20 md:w-30"
        />
        <NimiqHexagon
          class="absolute right-0 w-[175px] translate-x-[40%] translate-y-[64%] md:w-[300px] xl:w-[450px] text-blue-dark/[0.03]"
        />
      </template>

      <template v-else>
        <div class="absolute w-full h-full z-1 bg-blue-dark/[.15]" />
        <prismic-image
          :field="poster"
          class="absolute object-contain w-full h-full"
        />
      </template>

      <button
        class="absolute top-0 left-0 grid w-full h-full place-items-center drop-shadow-md z-1"
        @click="showVideo"
      >
        <!-- FIXME Now we use scale to make it responsive... -->
        <PlayButton
          class="!lg:mb-0 mb-32 scale-[0.45] sm:mb-0 md:scale-75 lg:scale-100 sm:scale-60"
        />
      </button>
    </div>
    <video v-else autoplay controls :src="highRes" class="object-cover" />
  </div>
</template>

<script lang="ts" setup>
import PlayButton from "~/static/icons/play-button.svg?skipsvgo";
import NimiqHexagon from "~/static/icons/nimiq-hexagon-filled.svg?skipsvgo";

const props = defineProps({
  highRes: {
    required: true,
    type: String,
  },
  mediumRes: {
    required: true,
    type: String,
  },
  lowRes: {
    required: true,
    poster: {
      type: Object,
    },
    default: () => {},
    type: Object as unknown as () => ImageField,
  },
  poster: {
    type: Object,
    default: () => {},
  },
});
const showingVideo = ref(false);
const hasPoster = computed(() => !!props.poster?.url);

const { recommendedVideoUrl } = useBestVideo({ ...props });

function showVideo() {
  showingVideo.value = true;
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
