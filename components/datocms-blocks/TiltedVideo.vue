<template>
  <div
    class="mx-auto w-full max-w-[1440px] px-64 "
  >
    <div
      ref="media$"
      class="custom-transform tilted-media-component h-full"
      :class="{ placeholder }"
    >
      <HorizontalVideo
        :youtube-url="data.youtubeVideoLink"
        :headline="data.headline"
        :thumbnail="data.thumbnail"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import { useEventListener } from '#imports'
defineProps({
  data: {
    type: Object,
    required: true
  }
})
const media$ = ref < HTMLImageElement | null > (null)
const placeholder = ref(true)

useEventListener('scroll', setRotation)

function setRotation () {
  if (!media$.value || !process.client) return

  // distance from top of viewport to top of image
  const mediaDistance = media$.value.getBoundingClientRect().top

  // get how much the user has scrolled from top
  const userDistance = window.pageYOffset

  if (userDistance < mediaDistance) {
    // if mediaDistance - userDistance is 0, then val is 0
    const val = userDistance / mediaDistance

    media$.value.style.setProperty('--rotate', `${(1 - val) * 30}deg`)
    media$.value.style.setProperty('--translateY', `${val * 100 - 100}px`)
  } else {
    // change css variable to their max values
    media$.value.style.setProperty('--rotate', '0deg')
    media$.value.style.setProperty('--translateY', '0')
  }
}

onMounted(async () => {
  placeholder.value = false
  await nextTick()
  setRotation()
})
</script>

  <style scoped>
  .custom-transform {
    --rotate: 30deg;
    --scale: 1;
    --translateY: -100px;

    transition: 350ms transform cubic-bezier(0, 0, 0.25, 1);

    transform: perspective(1800px) rotateX(var(--rotate)) scale(var(--scale)) translateY(var(--translateY));

    @apply origin-[center_70%];
  }

  .tilted-media-component > * {
    transition: opacity 350ms;
  }

  .placeholder > * {
    opacity: 0;
  }

  .placeholder {
    min-height: 500px;
  }
  </style>
