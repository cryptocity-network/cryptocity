<template>
  <a
    :href="link"
    class="group relative flex h-full w-[clamp(320px,370px,80vw)] cursor-pointer flex-col rounded-6 border-1 border-gray bg-[#1F234810] p-6 pb-0 text-left transition-all will-change-transform hover:-translate-y-6 hover:bg-white hover:shadow"
  >
    <div v-if="imageUrl || imageDato" class="relative h-240 overflow-hidden rounded-4">
      <!-- <DatoImage v-if="image" :image="image" class="size-full rounded-4 object-cover" /> -->
      <DatoImage v-if="imageDato" :image="imageDato" class="size-full rounded-4 object-cover" />
      <img v-if="imageUrl && !showPlaceHolder" :src="imageUrl" class="size-full rounded-4 object-cover" @error="showPlaceHolder = true">
      <svg
        v-else-if="showPlaceHolder"
        class="absolute-center size-96"
        width="48"
        height="40"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24.3902 0.0264282C24.4452 0.0264282 35.8568 0.0264282 35.8568 0.0264282C35.8568 3.798 32.7496 7.27741 28.3499 7.27741C28.2949 7.27741 16.9108 7.27741 16.9108 7.27741C16.8833 3.45271 20.0731 0.0264282 24.3902 0.0264282Z" fill="#FC8702" />
        <path d="M42.0722 10.4382C42.0997 10.4913 47.7918 20 47.7918 20C44.4096 21.8858 39.7074 21.0624 37.5076 17.3174C37.4801 17.2643 31.7881 7.75563 31.7881 7.75563C35.2253 5.86985 39.9274 6.82601 42.0722 10.4382Z" fill="#D94432" />
        <path d="M10.2842 22.656C10.3116 22.7091 16.0037 32.2177 16.0037 32.2177C12.6215 34.1035 7.91938 33.2801 5.71956 29.5351C5.69206 29.482 0 19.9734 0 19.9734C3.46472 18.0876 8.11183 19.0703 10.2842 22.656Z" fill="#21BCA5" />
        <path d="M14.7124 9.93359C14.6849 9.98671 8.99287 19.4953 8.99287 19.4953C5.61064 17.6095 4.0158 13.2536 6.21563 9.56174C6.24313 9.50862 11.9351 0 11.9351 0C15.4273 1.96547 16.8847 6.34794 14.7124 9.93359Z" fill="#E9B213" />
        <path d="M41.5762 30.4383C41.5487 30.4914 35.8566 40 35.8566 40C32.4744 38.1142 30.8796 33.7583 33.0794 30.0664C33.1069 30.0133 38.799 20.5047 38.799 20.5047C42.2637 22.417 43.7485 26.7995 41.5762 30.4383Z" fill="#1F2348" />
        <path d="M19.4698 32.7489C19.5248 32.7489 30.9364 32.7489 30.9364 32.7489C30.9364 36.5205 27.8291 39.9999 23.4295 39.9999C23.3745 39.9999 11.9904 39.9999 11.9904 39.9999C11.9629 36.1486 15.1801 32.7489 19.4698 32.7489Z" fill="#0582CA" />
      </svg>

      <div class="absolute left-0 top-0 size-full bg-blue/20 transition-opacity group-hover:opacity-50" />
      <div
        v-if="label"
        class="absolute right-14 top-2 mt-12 w-max rounded-4 bg-white px-12 py-4 text-14 font-bold uppercase ring-1 "

        :class="{
          '!text-[#21BCA5] !ring-[#21BCA5]': label === 'Live',
          '!text-[#FC8702] !ring-[#FC8702]': label === 'In Planning',
          '!text-[#E9B213] !ring-[#E9B213]': label === 'In Exploration',
        }"
      >
        {{ label }}
      </div>
    </div>

    <div v-if="title" class="flex grow flex-col justify-between gap-32 p-24 pt-32 lg:py-32">
      <div class="flex flex-col gap-8">
        <h3 class="text-22 text-blue">
          {{ title }}
        </h3>
        <div
          v-if="state"
          class="text-11 mt-12 w-max rounded px-12 py-4 font-bold uppercase ring-1 lg:text-12"
          :class="{
            '!text-[#21BCA5] !ring-[#21BCA5]': state === 'Live',
            '!text-[#FC8702] !ring-[#FC8702]': state === 'In Planning',
            '!text-[#E9B213] !ring-[#E9B213]': state === 'In Exploration',
          }"
        >
          {{ state }}
        </div>
        <div
          v-if="description"
          class="text-16 text-blue/60"
        >
          {{ description }}
        </div>
        <div v-if="eventType || stars" class="flex items-center gap-6 text-16  capitalize text-blue/60">
          <span>{{ eventType }}</span>
          <div class="flex items-center gap-2">
            <Star
              v-for="(star, index) in 5"
              :key="index"
              :percentage="(index + 1) < stars ?
                1 :
                (index + 1) === Math.ceil(stars) ?
                  1 - ((index + 1) - stars) :
                  0"
            />
          </div>
        </div>
      </div>

      <div class="relative">
        <p
          v-if="footer"
          class="text-12 font-bold uppercase !text-blue-light sm:text-13 lg:text-14"
          :class="{'transition-[opacity,transform] group-hover:-translate-y-1/2 group-hover:opacity-0': link}"
        >
          {{ footer }}
        </p>
        <div
          v-if="link"
          class="absolute left-0 top-1/2 flex items-center gap-8 !py-0 !text-blue-light opacity-0 transition-transform-opacity group-hover:-translate-y-1/2 group-hover:opacity-100"
        >
          <span class="text-12 font-bold uppercase  sm:text-13 lg:text-14">
            {{ linkLabel }}
          </span>
          <Arrow
            class="h-auto w-12 shrink-0 -rotate-45"
          />
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts" setup>
import Arrow from '@/static/icons/arrow.svg'
defineProps({
  title: {
    type: String,
    required: true
  },
  imageDato: {
    type: Object,
    required: false,
    default: null
  },
  imageUrl: {
    type: String,
    required: false,
    default: null
  },
  description: {
    type: String,
    required: false,
    default: null
  },
  eventType: {
    type: String,
    required: false,
    default: null
  },
  stars: {
    type: Number,
    required: false,
    default: null
  },
  link: {
    type: String,
    required: false,
    default: null
  },
  linkLabel: {
    type: String,
    required: false,
    default: null
  },
  label: {
    type: String,
    required: false,
    default: null
  },
  footer: {
    type: String,
    required: false,
    default: null
  },
  state: {
    type: String,
    required: false,
    default: null
  }
})

const showPlaceHolder = ref(false)
</script>
