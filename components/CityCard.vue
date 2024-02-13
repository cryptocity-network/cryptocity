<template>
  <nuxt-link
    :to="cityLink"
    class="custom-ease group relative size-full overflow-hidden rounded-8"
    :class="{
      'transform-gpu transition-transform hover:-translate-y-6': city.state === 'Live',
      'pointer-events-none': city.state !== 'Live'
    }"
  >
    <FadeInImage
      :image-url="city.mainImage.url"
      class="size-full rounded-8 object-cover"
      :class="{
        'opacity-75': city.state === 'Live',
        'opacity-50 grayscale': city.state !== 'Live'
      }"
    />
    <div
      class="absolute left-0 top-0 size-full rounded-8 mix-blend-hard-light"
      :class="{
        'bg-blue opacity-20': city.state === 'Live',
        'bg-black opacity-30': city.state !== 'Live'
      }"
    />
    <div v-if="city.state === 'Live'" class="absolute left-0 top-0 size-full rounded-8 bg-gradient-to-t from-blue to-transparent opacity-60 transition-opacity group-hover:opacity-0" />
    <DynamicLogo type="cities" logo-color="#1F2348" text-color="#1F2348" :city-name="city.name" class="absolute left-1/2 top-1/2 w-[215px] -translate-x-1/2 -translate-y-1/2 blur-lg xl:w-[291px]" />
    <DynamicLogo type="cities" logo-color="white" text-color="white" :city-name="city.name" class="absolute left-1/2 top-1/2 w-[215px] -translate-x-1/2 -translate-y-1/2 xl:w-[291px]" />
    <div
      v-if="city.state !== 'Live'"
      class="absolute bottom-32 left-1/2 -translate-x-1/2"
    >
      <div
        class=" flex h-32 w-max items-center gap-8 rounded bg-black/20 px-16 py-8 text-white"
      >
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="height: 18px"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.03.342a1.641 1.641 0 0 0-2.519.674l-.559 1.357a1.641 1.641 0 0 1-1.306 1.002l-1.455.189A1.641 1.641 0 0 0 .888 5.822l.564 1.354a1.641 1.641 0 0 1-.215 1.632L.342 9.97a1.641 1.641 0 0 0 .674 2.519l1.357.559c.544.224.926.722 1.002 1.306l.189 1.455a1.641 1.641 0 0 0 2.258 1.303l1.354-.563a1.641 1.641 0 0 1 1.632.214l1.162.895c.857.66 2.107.326 2.519-.674l.559-1.357a1.641 1.641 0 0 1 1.306-1.002l1.455-.189a1.641 1.641 0 0 0 1.303-2.258l-.563-1.354a1.641 1.641 0 0 1 .214-1.632l.895-1.162a1.641 1.641 0 0 0-.674-2.519l-1.357-.559a1.641 1.641 0 0 1-1.002-1.306l-.189-1.455A1.641 1.641 0 0 0 12.178.888l-1.354.564a1.641 1.641 0 0 1-1.632-.215L8.03.342Zm4.875 7.478a1.06 1.06 0 0 0-1.474-1.523L7.944 9.67 6.57 8.34a1.06 1.06 0 1 0-1.473 1.522l2.111 2.044a1.06 1.06 0 0 0 1.474 0l4.224-4.087Z"
            fill="currentColor"
          />
        </svg>
        <span class="whitespace-nowrap text-16 font-bold">
          Coming Soon</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from '~/store/store'
const store = useWebsiteStore()
const props = defineProps({
  city: {
    type: Object,
    default: null
  }
})
const cityLink = computed(() => {
  return store.getCurrentLocale === useRuntimeConfig().public.DATO_DEFAULT_LOCALE
    ? `/cities/${props.city.name.toLowerCase()}`
    : `/${store.getCurrentLocale}/cities/${props.city.name.toLowerCase()}`
})
</script>

<style scoped>
.custom-ease, .custom-ease * {
  @apply transform-gpu;
  transition-timing-function: cubic-bezier(0.25, 0, 0, 1);
  transition-duration: 600ms;
}
</style>
