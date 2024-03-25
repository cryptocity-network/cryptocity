<template>
  <NuxtLink
    :to="link"
    class="group relative flex h-full w-[clamp(320px,370px,80vw)] cursor-pointer flex-col rounded-6 border-1 border-gray bg-[#e9e9eb] bg-cover bg-center p-6 pb-0 transition-all will-change-transform hover:-translate-y-6 hover:bg-white hover:shadow"
  >
    <div v-if="fullScreen" class="absolute left-0 top-0 size-full overflow-hidden rounded-6 p-6">
      <div class="size-full rounded-6 bg-cover bg-no-repeat" :style="`background-image: url(${image.url})`" />
    </div>
    <div v-if="fullScreen" class="absolute left-0 top-0 size-full overflow-hidden rounded-6 p-6">
      <div
        class="size-full rounded-6 bg-blue opacity-20 mix-blend-hard-light"
      />
    </div>
    <div
      v-if="image || imageUrl"
      class="relative h-240 overflow-hidden rounded-4"
      :class="{' ': !fullScreen,
               'opacity-0': fullScreen}"
    >
      <DatoImage v-if="image" :image="image" class="size-full rounded-4 object-cover" />
      <img v-else :src="imageUrl" class="size-full rounded-4 object-cover">
      <div class="absolute left-0 top-0 size-full bg-blue/20 transition-opacity group-hover:opacity-50" />
      <div
        v-if="label && !fullScreen"
        class="absolute left-14 top-2 mt-12 flex w-max items-center rounded-[32px] bg-white/20 px-14 py-6 text-16 font-bold text-white "
        v-html="label"
      />
    </div>

    <div
      v-if="title"
      class="relative flex grow flex-col justify-between gap-24 p-24 lg:gap-32 lg:py-32"
      :class="{'pt-32 ': !fullScreen,
               '!text-white': fullScreen}"
    >
      <div>
        <div
          v-if="label && fullScreen"
          class="mb-24 flex w-max items-center rounded-[32px] bg-white/20 px-14 py-6 text-16 font-bold text-white "
          v-html="label"
        />
        <h3 class="text-22" :class="{'!text-28 !text-white': fullScreen}">
          <svg v-if="isVideo" class="mr-4 inline h-20 " viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 2.61961C0.5 0.782468 2.55341 -0.307856 4.0753 0.721186L15.2313 8.26442C16.5648 9.16609 16.5775 11.1255 15.2559 12.0444L4.09987 19.8008C2.58036 20.8573 0.5 19.7699 0.5 17.9193V2.61961Z" fill="#1F2348" />
          </svg>
          {{ title }}
        </h3>
        <div
          v-if="description"
          class="text-blue-dark/60"
          :class="{'mt-18': !fullScreen,
                   'mt-4 !text-18 !text-white/90': fullScreen}"
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
          class="text-14 font-bold uppercase text-blue/50  sm:text-13 lg:text-14"
          style="letter-spacing: 0.95px;"
          :class="{'transition-[opacity,transform] group-hover:-translate-y-1/2 group-hover:opacity-0': linkLabel,
                   '!text-white/90': fullScreen}"
        >
          {{ footer }}
        </p>
        <div
          v-if="link"
          class="absolute left-0 top-1/2 flex items-center gap-8 !py-0 !text-blue-light opacity-0"
          :class="{'transition-transform-opacity group-hover:-translate-y-1/2 group-hover:opacity-100': linkLabel}"
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
  </NuxtLink>
</template>

<script lang="ts" setup>
import Arrow from '@/static/icons/arrow.svg'
defineProps({
  title: {
    type: String,
    required: true
  },
  isVideo: {
    type: Boolean,
    required: false,
    default: false
  },
  fullScreen: {
    type: Boolean,
    required: false,
    default: false
  },
  image: {
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
    type: String || null,
    required: true,
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

// const showPlaceHolder = ref(false)
</script>
