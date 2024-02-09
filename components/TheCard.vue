<template>
  <a
    :href="link"
    class="group relative flex h-full w-[clamp(320px,370px,80vw)] cursor-pointer flex-col rounded-6 border-1 border-gray bg-[#e9e9eb] p-6 pb-0 transition-all will-change-transform hover:-translate-y-6 hover:bg-white hover:shadow"
  >
    <div v-if="image" class="relative h-240 overflow-hidden rounded-4">
      <img :src="image.url" class="size-full rounded-4 object-cover">
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

    <div v-if="title" class="flex grow flex-col justify-between gap-24 p-24 pt-32 lg:py-32">
      <div>
        <h3 class="text-22">
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
          class="mt-18 text-blue-dark/60"
        >
          {{ description }}
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
  image: {
    type: Object,
    required: false,
    default: null
  },
  description: {
    type: String,
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

</script>
