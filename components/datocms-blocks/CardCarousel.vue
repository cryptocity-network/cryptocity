<template>
  <div
    v-if="data"
    class="pb-160"
  >
    <div class="relative">
      <ul
        ref="slider"
        class="no-scrollbar flex w-full cursor-grab gap-16 overflow-x-auto !px-[max(16px,calc((100vw-255px)/2))] pb-40 pt-16 md:!px-[calc((100vw-2*232px-16px)/2)] xl:gap-32 xl:!px-[calc((100vw-3*245px-2*32px)/2)] xl:pt-16 2xl:!px-[calc((100vw-3*295px-2*32px)/2)]"
      >
        <li
          v-for="card in data.cards"
          :key="card.id"
          class="relative w-[clamp(320px,370px,calc(100vw-40px))] shrink-0 snap-center snap-always transition-all
          hover:-translate-y-12
          hover:shadow"
        >
          <!-- focus-within:lg:-translate-y-12 hover:lg:-translate-y-16
          focus-within:-translate-y-12
          focus-within:shadow -->
          <a
            class="flex size-full"
            href="http://"
          >
            <img
              v-if="card.image"
              class="aspect-video size-full rounded-6 object-cover"
              :src="card.image.url"
              :alt="card.image.alt"
              srcset=""
            >
            <div class="absolute inset-0 rounded-6 opacity-40 [background:linear-gradient(0deg,_#1F2348_0%,_rgba(31,_35,_72,_0)_100%)]" />
            <div class="absolute inset-0 rounded-6 bg-blue-dark/20" />
            <div class="absolute inset-0 z-1 flex size-full flex-col justify-end p-16">
              <TheLink
                :text="card.name"
                invert
              />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  data: {
    type: Object,
    required: true
  }
})

let mouseDown = false
let startX, scrollLeft
const slider = ref(null)

onMounted(() => {
  const startDragging = (e) => {
    mouseDown = true
    startX = e.pageX - slider.value.offsetLeft
    scrollLeft = slider.value.scrollLeft
  }

  const stopDragging = (e) => {
    mouseDown = false
  }

  const move = (e) => {
    e.preventDefault()
    if (!mouseDown) { return }
    const x = e.pageX - slider.value.offsetLeft
    const scroll = x - startX
    slider.value.scrollLeft = scrollLeft - scroll
  }

  // Add the event listeners
  slider.value.addEventListener('mousemove', move, false)
  slider.value.addEventListener('mousedown', startDragging, false)
  slider.value.addEventListener('mouseup', stopDragging, false)
  slider.value.addEventListener('mouseleave', stopDragging, false)
})

</script>
