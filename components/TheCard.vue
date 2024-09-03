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
      :class="{
        '': !fullScreen,
        'opacity-0': fullScreen
      }"
    >
      <DatoImage v-if="image" :key="imageUrl" loading="lazy" :image class="size-full rounded-4 object-cover" />
      <img v-else :src="imageUrl" loading="lazy" class="size-full rounded-4 object-cover">
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
              :key="star"
              :percentage="(index + 1) < stars ?
                1 :
                (index + 1) === Math.ceil(stars) ?
                  1 - ((index + 1) - stars) :
                  0"
            />
          </div>
        </div>
      </div>

      <div class="relative flex justify-between gap-x-16">
        <p
          v-if="footer"
          class="whitespace-nowrap text-14 font-bold uppercase text-blue/50  sm:text-13 lg:text-14"
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
        <div v-if="countries" class="flex flex-wrap justify-end gap-8">
          <div
            v-for="(country, i) in countries"
            :key="i"
          >
            <svg
              v-if="country === 'brazil'"
              class="country-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <g clip-path="url(#a)">
                <path fill="#F0F0F0" d="M13.099 10.668a3.138 3.138 0 0 1-.512 1.207 5.32 5.32 0 0 0-5.742-1.77v-.039c0-.441.09-.863.258-1.246a6.667 6.667 0 0 1 1.32-.136 6.463 6.463 0 0 1 4.676 1.984Z" />
                <path fill="#6DA544" d="M0 .063v20h20v-20H0ZM10 15.59l-7.5-5.527L10 4.535l7.5 5.527L10 15.59Z" />
                <path fill="#0052B4" d="M9.999 13.218Zm2.125-.824c.043-.04.086-.079.125-.121a1.77 1.77 0 0 1-.125.12Zm.46-.519a.794.794 0 0 1-.05.07c.015-.027.034-.047.05-.07Zm.512-1.208Zm.024-.125A3.158 3.158 0 0 0 10 6.905c-1.3 0-2.418.785-2.898 1.91h-.004a3.158 3.158 0 0 1 6.023 1.727Z" />
                <path fill="#FFDA44" d="m10 4.536-7.5 5.527 7.5 5.528 7.5-5.527L10 4.535Zm0 8.684a3.157 3.157 0 0 1 0-6.313 3.157 3.157 0 0 1 0 6.313Z" />
                <path fill="#0052B4" d="M8.42 9.862c-.55 0-1.077.082-1.577.239a3.157 3.157 0 0 0 5.742 1.77 5.333 5.333 0 0 0-4.164-2.009Zm4.677.805a3.158 3.158 0 0 0-6-1.852 6.482 6.482 0 0 1 6 1.852Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 .063h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
            <svg
              v-else-if="country === 'canada'"
              class="country-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <g clip-path="url(#a)">
                <path fill="#F0F0F0" d="M6.783-.343v20.687h6.897V-.343H6.783Zm5.414 12.263h-1.575v1.18h-.788v-1.18H8.258l.392-.788-1.576-.788.788-.392v-.788l1.576.788-.788-1.576h.788l.788-1.18.787 1.18h.792l-.787 1.576 1.575-.788v.788l.788.392-1.576.788.392.788Z" />
                <path fill="#D80027" d="M6.784-.343H-.113v20.687h6.897V-.343Zm13.79 0h-6.897v20.687h6.897V-.343Zm-8.769 11.479 1.572-.788-.788-.396v-.784l-1.572.784.788-1.572h-.788L10.23 7.2l-.788 1.18h-.788l.788 1.572-1.572-.784v.784l-.788.396 1.572.787-.392.784h1.576v1.184h.783V11.92h1.576l-.392-.784Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
            <div
              v-else
              :style="`background: url('${country}') no-repeat center`"
              class="country-icon"
            />
          </div>
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
  },
  countries: {
    type: Array,
    required: false,
    default: null
  }
})

// const showPlaceHolder = ref(false)
</script>

<style scoped>
.country-icon {
  @apply size-20;
  background-color: transparent !important;
  background-size: 115% 115% !important;
  border-radius: 99999px;
}
</style>
